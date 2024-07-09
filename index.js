const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config')


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from the frontend

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

app.get("/", (req, res) => {
  res.send(`
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
        <h1>Welcome to EMAIL SENDER</h1>
      </div>
    `);
});

app.post('/api/send-email', (req, res) => {
  const { name, email, contactNumber, message } = req.body;
  console.log("{ name, email, contactNumber, message }", { name, email, contactNumber, message })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});