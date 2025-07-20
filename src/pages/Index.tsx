import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone, Mail, MapPin, Shield, Users, Clock, CheckCircle, Star, Eye, AlertTriangle,
  Building, Home, School, ShoppingBag, Utensils, Camera, UserCheck, Car, Calendar,
  Zap, Dog, Download
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { IndustryCard } from "@/components/IndustryCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Hero.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { DocumentsSection } from "@/components/DocumentsSection";

import MannedGuarding from "@/pages/services/MannedGuarding";
import EventsSecurity from "@/pages/services/EventsSecurity";
import K9Unit from "@/pages/services/K9Unit";
import CCTVInstallation from "@/pages/services/CCTVInstallation";
import ElectricFencing from "@/pages/services/ElectricFencing";
import AlarmResponse from "@/pages/services/AlarmResponse";
import VIPCloseProtection from "@/pages/services/VIPCloseProtection";

      // ✅ Reusable animated number counter
              const AnimatedCounter = ({ end, suffix = '', duration = 2 }) => {
                const { ref, inView } = useInView({ triggerOnce: true });
                return (
                  <div ref={ref}>
                    {inView ? <CountUp end={end} duration={duration} suffix={suffix} /> : '0'}
                  </div>
                );
              };


                const serviceData = [
            {
              title: "Manned Guarding",
              path: "/services/manned-guarding",
              image: "http://localhost:3020/lovable-uploads/manned-guarding.jpg",
              desc: "Professional security personnel providing reliable and comprehensive security solutions for residential, commercial, and industrial properties.",
            },
            {
              title: "Events Security",
              path: "/services/events-security",
              image: "http://localhost:3020/lovable-uploads/events-security.png",
              desc: "Exceptional event security solutions and professional services to ensure safety and smooth execution of gatherings of all sizes.",
            },
            {
              title: "K9 Unit Services",
              path: "/services/k9-unit",
              image: "http://localhost:3020/lovable-uploads/k9-unit.png",
              desc: "Specialized canine security units for enhanced threat detection, drug screening, and comprehensive security operations.",
            },
            {
              title: "CCTV Installation",
              path: "/services/cctv-installation",
              image: "http://localhost:3020/lovable-uploads/cctv-installation.png",
              desc: "Advanced CCTV installation services to help clients monitor and secure their premises effectively with continuous monitoring.",
            },
            {
              title: "Electric Fencing",
              path: "/services/electric-fencing",
              image: "http://localhost:3020/lovable-uploads/electric-fence.png",
              desc: "Professional electric fencing installation and maintenance services to create secure perimeters for residential and commercial properties.",
            },
            {
              title: "Alarm Response",
              path: "/services/alarm-response",
              image: "http://localhost:3020/lovable-uploads/alarm-response.png",
              desc: "Swift and reliable alarm response services to protect property and respond immediately to security threats and potential risks.",
            },
            {
              title: "VIP Close Protection",
              path: "/services/vip-close-protection",
              image: "http://localhost:3020/lovable-uploads/vip-close-protection.png",
              desc: "Elite personal protection services for high-profile individuals, executives, and VIPs requiring discreet and professional security.",
            },
          ];

          

      // ✅ Quick Stats section
      const QuickStats = () => (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-600">Protection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-600">Clients Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
      );

      // ✅ About Us section
      const AboutUs = () => (
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Jolu Group Security Ltd
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Jolu Group Security Limited is a trusted security company providing comprehensive and tailored protective services, logistics, procurement, and training for the defense, energy, and financial sectors, as well as high net-worth clients, diplomatic missions, and international organizations operating in high-risk, volatile, hostile, and complex environments.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  At Jolu Group Security, we believe that safety is the foundation of progress. Our mission is to deliver reliable, mission-driven security solutions that empower individuals and organizations to operate confidently, even in the most challenging environments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Integrity</h3>
                  </div>
                  <div className="text-center">
                    <Eye className="h-12 w-12 text-red-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Vigilance</h3>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-red-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Professionalism</h3>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="lg:pl-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="http://localhost:3020/lovable-uploads/guards-outside.png"
                  alt="JOLU Group Security team"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
      );

      // ✅ Main Index Page
      const Index = () => {
        const [showQuoteForm, setShowQuoteForm] = useState(false);

        return (
          <div>
            {/* Hero Section */}
           <section id="home" className="hero-section min-h-screen flex items-center text-white">
              <div className="hero-background">
                <div className="hero-slide"></div>
                <div className="hero-slide"></div>
                <div className="hero-slide"></div>
              </div>
              <div className="hero-overlay"></div>
              <div className="hero-content relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Your Safety,<br />
                  <span className="text-yellow-300">Our Commitment.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Protecting homes, businesses, and communities across Kenya with reliable, professional security services you can trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+254790298003" className="inline-block">
                    <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us: +254 790 298 003
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4"
                    onClick={() => setShowQuoteForm(true)}
                  >
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </section>

            {/* Stats + About */}
            <QuickStats />
            <AboutUs />       

              {/* Services */}
          <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Security Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive security solutions tailored to meet your specific needs and protect what matters most to you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {serviceData.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 90,
                      damping: 18,
                    }}
                    whileHover={{
                      scale: 1.04,
                      transition: { type: "spring", stiffness: 250 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="transform transition-transform duration-300"
                  >
                    <Link to={service.path}>
                      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full group">
                        <div className="overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          />
                        </div>
                        <div className="px-6 py-5">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{service.desc}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

                  {/* Industries Served */}
                  <section id="industries" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                          Our expertise spans across multiple sectors, providing specialized security solutions for diverse industries.
                        </p>
                      </div>

                      {/* Animate cards on scroll and hover */}
                      <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2 }}
                      >
                        {[
                          {
                            title: "Residential",
                            img: "http://localhost:3020/lovable-uploads/residential.jpg",
                            alt: "Residential Security in Kenya",
                            desc: "Protecting homes and residential communities with tailored security solutions for families and property owners.",
                          },
                          {
                            title: "Commercial",
                            img: "http://localhost:3020/lovable-uploads/commercial.jpeg",
                            alt: "Commercial Buildings in Nairobi",
                            desc: "Comprehensive security services for offices, business centers, and commercial facilities across Kenya.",
                          },
                          {
                            title: "Educational",
                            img: "http://localhost:3020/lovable-uploads/educational.jpg",
                            alt: "Educational Institutions in Kenya",
                            desc: "Specialized security solutions for schools, colleges, and educational institutions to ensure student safety.",
                          },
                          {
                            title: "Retail",
                            img: "http://localhost:3020/lovable-uploads/retail.jpg",
                            alt: "Retail Stores and Shopping Centers",
                            desc: "Protecting retail stores, shopping centers, and commercial outlets from theft and security threats.",
                          },
                          {
                            title: "Hospitality",
                            img: "http://localhost:3020/lovable-uploads/hospitality.jpg",
                            alt: "Hotels and Hospitality in Kenya",
                            desc: "Security services for hotels, restaurants, and hospitality venues to ensure guest safety and peace of mind.",
                          },
                          {
                            title: "Construction",
                            img: "http://localhost:3020/lovable-uploads/construction.jpg",
                            alt: "Construction Sites Security",
                            desc: "Site security and equipment protection for construction projects and development sites.",
                          },
                        ].map(({ title, img, alt, desc }, i) => (
                          <motion.div
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 30 },
                              show: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="bg-white hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden shadow-md h-full"
                          >
                            <CardHeader>
                              <div className="mb-4">
                                <img
                                  src={img}
                                  alt={alt}
                                  className="w-full h-48 object-cover rounded-lg"
                                />
                              </div>
                              <CardTitle className="text-xl font-semibold text-gray-900">{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600">{desc}</p>
                            </CardContent>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </section>

                  <WhyChooseUs />


                        <DocumentsSection />


                            {/* Contact Section */}
                          <section id="contact" className="py-20">
                            <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7, ease: "easeOut" }}
                              viewport={{ once: true, amount: 0.3 }}
                              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                            >
                              <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                  Ready to secure your property? Contact us today for a free consultation and personalized security assessment.
                                </p>
                              </div>

                              <div className="grid lg:grid-cols-2 gap-12">
                                {/* LEFT SIDE - Contact Info + Maps */}
                                <motion.div
                                  initial={{ opacity: 0, x: -80 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                >
                                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                                  <div className="space-y-6">
                                    <div className="flex items-center">
                                      <Phone className="h-6 w-6 text-red-600 mr-4" />
                                      <div>
                                        <div className="font-semibold">Phone</div>
                                        <div className="text-gray-600">+254 790 298 003 | +254 790 182 487</div>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <Mail className="h-6 w-6 text-red-600 mr-4" />
                                      <div>
                                        <div className="font-semibold">Email</div>
                                        <div className="text-gray-600">jolugroup@gmail.com</div>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <MapPin className="h-6 w-6 text-red-600 mr-4" />
                                      <div>
                                        <div className="font-semibold">Nairobi – Main Office</div>
                                        <div className="text-gray-600">Thome Estate, Nairobi</div>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <MapPin className="h-6 w-6 text-red-600 mr-4" />
                                      <div>
                                        <div className="font-semibold">Nakuru - Regional Office</div>
                                        <div className="text-gray-600">Nakuru</div>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <MapPin className="h-6 w-6 text-red-600 mr-4" />
                                      <div>
                                        <div className="font-semibold">Migori – Branch Office</div>
                                        <div className="text-gray-600">Rongo</div>
                                      </div>
                                    </div>
                                  </div>

                                  

                                  <div className="mt-8">
                                    <a href="https://wa.me/254790298003" target="_blank" rel="noopener noreferrer">
                                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                                        <Phone className="mr-2 h-4 w-4" />
                                        WhatsApp Us
                                      </Button>
                                    </a>
                                  </div>

                                  {/* Maps */}
                                  <div className="mt-12 space-y-10">
                                    {/* Nairobi */}
                                    <div>
                                      <h4 className="font-semibold text-lg text-gray-800 mb-2">Nairobi – Main Office</h4>
                                      <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.416901251848!2d36.8508475!3d-1.2194246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1c5a6c4b21a7%3A0x991d0a8f3c176aad!2sThome%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1712312919946!5m2!1sen!2ske"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                      ></iframe>
                                    </div>

                                    {/* Nakuru */}
                                    <div>
                                      <h4 className="font-semibold text-lg text-gray-800 mb-2">Nakuru - Regional Office</h4>
                                      <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.768809440484!2d36.060809509865564!3d-0.2854380997105522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298dbee7691795%3A0x57bb3856ac0d67f7!2sKFA%20Building%2C%20Geoffrey%20Kamau%20Ave%2C%20Nakuru!5e0!3m2!1sen!2ske!4v1752868635219!5m2!1sen!2ske"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                      ></iframe>
                                    </div>
                                  </div>
                                </motion.div>

                                {/* RIGHT SIDE - Contact Form */}
                                <motion.div
                                  initial={{ opacity: 0, x: 80 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                >
                                  <ContactForm />
                                </motion.div>
                              </div>
                            </motion.div>
                          </section>




      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/609259d6-4c6b-4219-a763-13ae779e9163.png" 
                  alt="JOLU Group Security Ltd" 
                  className="h-8 w-auto"
                />
                <span className="ml-2 font-bold">JOLU Group Security</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted security partner in Kenya, providing comprehensive protection services with integrity and professionalism.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Manned Guarding</li>
                <li>Events Security</li>
                <li>K9 Unit Services</li>
                <li>CCTV Installation</li>
                <li>Electric Fencing</li>
                <li>Alarm Response</li>
                <li>VIP Close Protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Residential</li>
                <li>Commercial</li>
                <li>Educational</li>
                <li>Retail</li>
                <li>Hospitality</li>
                <li>Construction</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+254 790 298 003</li>
                <li>jolugroup@gmail.com</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
                    <div className="mt-8 flex justify-center space-x-6 text-gray-400">
            <a href="https://www.facebook.com/share/16oH7MyoMh/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="h-5 w-5 hover:text-white" />
            </a>
            <a href="https://www.instagram.com/jolugroupsecurity?utm_source=qr&igsh=OTAwNm91bjFrcGVj" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-5 w-5 hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/jolu-group-b90a35343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="h-5 w-5 hover:text-white" />
            </a>
            <a href="https://www.tiktok.com/@jolugroup?_t=ZM-8y2Y5HHqdT6&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="h-5 w-5 hover:text-white" />
            </a>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 JOLU Group Security Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setShowQuoteForm(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <QuoteForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

