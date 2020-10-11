const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
var environment = require("./env");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = environment.server.PORT;

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: environment.mail.USER_KEY,
    pass: environment.mail.PASS_KEY,
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
  //if (err) throw err;
  console.log(`Server running on port ${port}`);
});
