Email Sender Service

A Node.js application for sending emails using Nodemailer. This service is suitable for sending OTPs, CTAs, and other forms. It is configurable via environment variables and supports various SMTP providers.

Features
Send emails using various SMTP providers
Configurable via environment variables
Suitable for OTPs, CTAs, and other forms
Table of Contents
Installation
Usage
Environment Variables
Example
Project Structure
Contributing
License
Installation
To use this application, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/email-sender.git
cd email-sender
Install dependencies:

bash
Copy code
npm install
or

bash
Copy code
yarn install
Set up environment variables:

Create a .env file in the root directory and add the following configurations:

plaintext
Copy code
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
PORT=3000
Adjust the values according to your SMTP provider and email credentials.

Usage
Start the server:

bash
Copy code
node index.js
Send an email:

Send a POST request to http://localhost:3000/send-email with a JSON body containing the email details:

json
Copy code
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a test email.",
  "html": "<p>This is a test email.</p>"
}
Environment Variables
EMAIL_HOST: SMTP server host address.
EMAIL_PORT: SMTP server port.
EMAIL_USER: Email account user (sender).
EMAIL_PASS: Email account password.
PORT: Port on which the server will run.
Example
Here is an example using cURL to send a test email:

bash
Copy code
curl -X POST http://localhost:3000/send-email \
-H "Content-Type: application/json" \
-d '{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a test email.",
  "html": "<p>This is a test email.</p>"
}'
Project Structure
arduino
Copy code
email-sender/
├── config/
│   └── config.js
├── services/
│   └── emailService.js
├── index.js
└── .env
Contributing
Contributions are welcome! Please follow the Contributing Guide to contribute to this project.

License
This project is licensed under the MIT License. See the LICENSE file for details.
