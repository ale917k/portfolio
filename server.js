const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  let url = path.join(__dirname, "../client/build", "index.html");
  if (!url.startsWith("/app/"))
    // we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_KEY,
    pass: process.env.PASS_KEY,
  },
});

app.get("/", (req, res) => {
  res.send("Up and running");
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/send_email", (req, res) => {
  const contactEmail = {
    from: req.body.email,
    to: "alessiopetrin9@gmail.com",
    subject: "YOO! Email from Portfolio!",
    html: req.body.messageHtml,
  };

  transport.sendMail(contactEmail, (err, info) => {
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
