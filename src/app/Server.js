// // server.js
// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// app.use(cors());

// // Configure Nodemailer
// const transporter = nodemailer.createTransport({
//   service: "gmail", // Use your email provider (e.g., Gmail, Outlook)
//   auth: {
//     user: "your-email@gmail.com", // Replace with your email
//     pass: "your-email-password", // Replace with your email password or app password
//   },
// });

// // Email sending endpoint
// app.post("/send-email", async (req, res) => {
//   const { email, phone, message } = req.body;

//   try {
//     await transporter.sendMail({
//       from: "your-email@gmail.com", // Sender email
//       to: email, // Recipient email
//       subject: "Message from Your Website",
//       text: `Phone: ${phone}\nMessage: ${message}`,
//     });
//     res.status(200).send("Email sent successfully!");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error sending email");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${process.env.PORT}`);
// });
