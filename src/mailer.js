const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@switchit.com.ar",
    pass: "Murasaki22",
  },
});

module.exports = transporter;
