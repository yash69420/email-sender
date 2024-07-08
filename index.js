const express = require('express');
const { sendEmail } = require('./services/emailService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/')

app.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body;

  try {
    const info = await sendEmail(to, subject, text, html);
    res.status(200).json({ message: 'Email sent', info });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});