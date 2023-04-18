const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

const pwReset = (req, res) => {



app.use(cors());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
  });

  function sendEmail({recipient_email, OTP}) {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
          },
          });

          const mail_configs = {
            from: process.env.MY_EMAIL,
            to: recipient_email,
            subject: 'FamApp Password Reset',
            htmlL : `<h1> Your OTP is ${OTP} </h1>`,
          };

          transporter.sendMail(mail_configs, function(err, info) {
            if (err) {
              console.log(err);
              return reject({ message: 'Email not sent'});
            } 
            console.log('Email sent: ' + info.response);
            return resolve(info.response);
          });
        });
  }
}


module.exports = pwReset;
