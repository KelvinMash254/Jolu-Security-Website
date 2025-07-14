
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Shield, Users, Clock, CheckCircle, Star, Eye, AlertTriangle, Building, Home, School, ShoppingBag, Utensils, Camera, UserCheck, Car, Calendar, Zap, Dog } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { IndustryCard } from "@/components/IndustryCard";
import { WhyChooseUsCard } from "@/components/WhyChooseUsCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/609259d6-4c6b-4219-a763-13ae779e9163.png" 
                alt="JOLU Group Security Ltd" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-lg font-bold text-gray-900">JOLU Group Security</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">About</a>
              <a href="/services" className="text-gray-700 hover:text-red-600 font-medium">Services</a>
              <a href="#industries" className="text-gray-700 hover:text-red-600 font-medium">Industries</a>
              <a href="#why-choose-us" className="text-gray-700 hover:text-red-600 font-medium">Why Choose Us</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
            </div>
            <QuoteForm />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Safety,<br />
              <span className="text-yellow-300">Our Commitment.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protecting homes, businesses, and communities across Kenya with reliable, professional security services you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +254 790 298 003
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Protection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Clients Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About JOLU Group Security Ltd
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                JOLU Group Security Limited is a trusted security company providing comprehensive and tailored protective services, logistics, procurement, and training for the defense, energy, and financial sectors, as well as high net-worth clients, diplomatic missions, and international organizations operating in high-risk, volatile, hostile, and complex environments.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                At JOLU Group Security, we believe that safety is the foundation of progress. Our mission is to deliver reliable, mission-driven security solutions that empower individuals and organizations to operate confidently, even in the most challenging environments.
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
            </div>
            <div className="lg:pl-8">
              <img 
                src="/lovable-uploads/22705b7f-1767-431f-aa11-1e409fc8f253.png" 
                alt="JOLU Group Security team in high-visibility uniforms" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Security Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to meet your specific needs and protect what matters most to you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/a7436579-bd64-4ae0-ab2a-8a33608836f0.png" 
                    alt="Manned Guarding Services" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Manned Guarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Professional security personnel providing reliable and comprehensive security solutions for residential, commercial, and industrial properties.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/a43900e9-b8a7-4fd1-a598-31db9ec4f29a.png" 
                    alt="Events Security" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Events Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Exceptional event security solutions and professional services to ensure safety and smooth execution of gatherings of all sizes.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/f39415ee-18d5-4e7c-bcab-b24d2ee6ac19.png" 
                    alt="K9 Unit Services" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">K9 Unit Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Specialized canine security units for enhanced threat detection, drug screening, and comprehensive security operations.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/e069cbc0-c281-4e74-9c20-c24ba110c9d6.png" 
                    alt="CCTV Installation" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">CCTV Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced CCTV installation services to help clients monitor and secure their premises effectively with continuous monitoring.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/13b8beab-78f8-4abf-8f74-15a3fd8125f2.png" 
                    alt="Electric Fencing" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Electric Fencing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Professional electric fencing installation and maintenance services to create secure perimeters for residential and commercial properties.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/6ecb7db7-6854-4689-bfee-b5f6dec79881.png" 
                    alt="Alarm Response" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Alarm Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Swift and reliable alarm response services to protect property and respond immediately to security threats and potential risks.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/f0159bdf-1df5-43f0-a519-f1304007c2df.png" 
                    alt="VIP Close Protection" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">VIP Close Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Elite personal protection services for high-profile individuals, executives, and VIPs requiring discreet and professional security.</p>
              </CardContent>
            </Card>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60" 
                    alt="Residential Security in Kenya" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Residential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Protecting homes and residential communities with tailored security solutions for families and property owners.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60" 
                    alt="Commercial Buildings in Nairobi" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Commercial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive security services for offices, business centers, and commercial facilities across Kenya.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60" 
                    alt="Educational Institutions in Kenya" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Educational</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Specialized security solutions for schools, colleges, and educational institutions to ensure student safety.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60" 
                    alt="Retail Stores and Shopping Centers" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Protecting retail stores, shopping centers, and commercial outlets from theft and security threats.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60" 
                    alt="Hotels and Hospitality in Kenya" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Security services for hotels, restaurants, and hospitality venues to ensure guest safety and peace of mind.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60" 
                    alt="Construction Sites Security" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Site security and equipment protection for construction projects and development sites.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose JOLU Group Security?</h2>
            <p className="text-lg text-red-100 max-w-3xl mx-auto">
              We stand out in the security industry through our commitment to excellence, local expertise, and unwavering dedication to your safety.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <WhyChooseUsCard
              icon={<CheckCircle className="h-8 w-8" />}
              title="Customized Solutions"
              description="We understand that every client has unique security needs. That's why we design and implement tailored strategies that align with your specific environment, risks, and operational goals."
            />
            <WhyChooseUsCard
              icon={<Shield className="h-8 w-8" />}
              title="Safety Compliance"
              description="Our operations strictly adhere to local and international safety and security regulations. We prioritize compliance to ensure our services are both effective and legally sound."
            />
            <WhyChooseUsCard
              icon={<Eye className="h-8 w-8" />}
              title="Proactive Approach"
              description="We don't just respond to threats—we anticipate them. Through constant risk assessment and intelligence gathering, we take preventative measures to mitigate incidents before they occur."
            />
            <WhyChooseUsCard
              icon={<Clock className="h-8 w-8" />}
              title="24/7 Reliability & Availability"
              description="Our teams are dependable, responsive, and ready 24/7. We provide consistent, uninterrupted support so you can operate with confidence at all times."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to secure your property? Contact us today for a free consultation and personalized security assessment.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
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
                    <div className="font-semibold">Main Office</div>
                    <div className="text-gray-600">Thome Estate, Along Northern Bypass, Nairobi</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-4" />
                  <div>
                    <div className="font-semibold">Regional Office</div>
                    <div className="text-gray-600">Nakuru (KFA Building, Along Geoffrey Kamau Avenue)</div>
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
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.825624474456!2d36.88238081475946!3d-1.277890999066639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11d13807ac8b%3A0x8e64c24325a40e2f!2sJolu%20Group%20Security!5e0!3m2!1sen!2ske!4v1678886969581!5m2!1sen!2ske"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 JOLU Group Security Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
