const express = require("express");
const nodemailer = require("nodemailer");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_KEY,
    pass: process.env.PASS_KEY,
  },
});

app.get("/", function (req, res) {
  res.send("Up and running");
});

app.post("/send_email", function (req, res) {
  const contactEmail = {
    from: req.body.email,
    to: "alessiopetrin9@gmail.com",
    subject: "YOO! Email from Portfolio!",
    html: req.body.messageHtml,
  };

  transport.sendMail(contactEmail, function (err, info) {
    if (err) {
      res.status(500).json({
        error: err,
      });
      console.log(err);
    } else {
      res.status(201).json({
        message: "Email sent successfully!",
      });
      console.log(info);
    }
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${port}`);
});
