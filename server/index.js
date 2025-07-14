require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const services = [
  {
    title: "Manned Guarding",
    description: "Professional security personnel providing reliable and comprehensive security solutions for residential, commercial, and industrial properties.",
    image: "/lovable-uploads/a7436579-bd64-4ae0-ab2a-8a33608836f0.png",
  },
  {
    title: "Events Security",
    description: "Exceptional event security solutions and professional services to ensure safety and smooth execution of gatherings of all sizes.",
    image: "/lovable-uploads/a43900e9-b8a7-4fd1-a598-31db9ec4f29a.png",
  },
  {
    title: "K9 Unit Services",
    description: "Specialized canine security units for enhanced threat detection, drug screening, and comprehensive security operations.",
    image: "/lovable-uploads/f39415ee-18d5-4e7c-bcab-b24d2ee6ac19.png",
  },
  {
    title: "CCTV Installation",
    description: "Advanced CCTV installation services to help clients monitor and secure their premises effectively with continuous monitoring.",
    image: "/lovable-uploads/e069cbc0-c281-4e74-9c20-c24ba110c9d6.png",
  },
  {
    title: "Electric Fencing",
    description: "Professional electric fencing installation and maintenance services to create secure perimeters for residential and commercial properties.",
    image: "/lovable-uploads/13b8beab-78f8-4abf-8f74-15a3fd8125f2.png",
  },
  {
    title: "Alarm Response",
    description: "Swift and reliable alarm response services to protect property and respond immediately to security threats and potential risks.",
    image: "/lovable-uploads/6ecb7db7-6854-4689-bfee-b5f6dec79881.png",
  },
  {
    title: "VIP Close Protection",
    description: "Elite personal protection services for high-profile individuals, executives, and VIPs requiring discreet and professional security.",
    image: "/lovable-uploads/f0159bdf-1df5-43f0-a519-f1304007c2df.png",
  },
];

app.get("/api/services", (req, res) => {
  res.json(services);
});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  const mailOptions = {
    from: `"Jolu Group Security" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

app.post("/api/quote", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  const mailOptions = {
    from: `"Jolu Group Security" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "New Quote Request",
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.status(200).json({ message: "Quote request sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send quote request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
