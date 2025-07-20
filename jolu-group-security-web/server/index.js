require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3021;

app.use(cors());
app.use(express.json());

// ✅ Serve static files from /public/lovable-uploads
app.use('/lovable-uploads', express.static(path.join(__dirname, 'public/lovable-uploads')));

const services = [
  {
    title: "Manned Guarding",
    description: "Professional security personnel providing reliable and comprehensive security solutions for residential, commercial, and industrial properties.",
    image: "/lovable-uploads/manned-guarding.png",
  },
  {
    title: "Events Security",
    description: "Exceptional event security solutions and professional services to ensure safety and smooth execution of gatherings of all sizes.",
    image: "/lovable-uploads/events-security.png",
  },
  {
    title: "K9 Unit Services",
    description: "Specialized canine security units for enhanced threat detection, drug screening, and comprehensive security operations.",
    image: "/lovable-uploads/k9-unit-services.png",
  },
  {
    title: "CCTV Installation",
    description: "Advanced CCTV installation services to help clients monitor and secure their premises effectively with continuous monitoring.",
    image: "/lovable-uploads/cctv-installation.png",
  },
  {
    title: "Electric Fencing",
    description: "Professional electric fencing installation and maintenance services to create secure perimeters for residential and commercial properties.",
    image: "/lovable-uploads/electric-fencing.png",
  },
  {
    title: "Alarm Response",
    description: "Swift and reliable alarm response services to protect property and respond immediately to security threats and potential risks.",
    image: "/lovable-uploads/alarm-response.png",
  },
  {
    title: "VIP Close Protection",
    description: "Elite personal protection services for high-profile individuals, executives, and VIPs requiring discreet and professional security.",
    image: "/lovable-uploads/vip-close-protection.png",
  },
];

// Services API
app.get("/api/services", (req, res) => {
  res.json(services);
});

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact Form Endpoint
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

// Quote Form Endpoint
app.post("/api/quote", async (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    county,
    area,
    service,
    message,
    guards
  } = req.body;

  const mailOptions = {
    from: `"Jolu Group Security" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "New Quote Request",
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>County:</strong> ${county}</p>
      <p><strong>Area/Town:</strong> ${area}</p>
      ${guards ? `<p><strong>No. of Guards:</strong> ${guards}</p>` : ""}
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Quote Request sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.status(200).json({ message: "Quote request sent successfully" });
  } catch (error) {
    console.error("Quote Email Error:", error);
    res.status(500).json({ message: "Failed to send quote request" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
