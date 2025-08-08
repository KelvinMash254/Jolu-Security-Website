// utils/email.ts or lib/email.ts

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for port 587
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // 16-char app password from Gmail
  },
});

export const sendQuoteEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const mailOptions = {
    from: `"Jolu Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO, // Your receiving Gmail address
    subject: "New Quote Request from Website",
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Message:</strong><br>${formData.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
