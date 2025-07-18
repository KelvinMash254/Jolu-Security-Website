import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4 hover:opacity-90">
              <img
                src="/lovable-uploads/609259d6-4c6b-4219-a763-13ae779e9163.png"
                alt="Jolu Group Security Ltd"
                className="h-8 w-auto"
              />
              <span className="ml-2 font-bold">Jolu Group Security</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted security partner in Kenya, providing comprehensive protection services with integrity and professionalism.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/manned-guarding" className="hover:text-white">Manned Guarding</Link></li>
              <li><Link to="/services/events-security" className="hover:text-white">Events Security</Link></li>
              <li><Link to="/services/k9-unit" className="hover:text-white">K9 Unit Services</Link></li>
              <li><Link to="/services/cctv-installation" className="hover:text-white">CCTV Installation</Link></li>
              <li><Link to="/services/electric-fencing" className="hover:text-white">Electric Fencing</Link></li>
              <li><Link to="/services/alarm-response" className="hover:text-white">Alarm Response</Link></li>
              <li><Link to="/services/vip-close-protection" className="hover:text-white">VIP Close Protection</Link></li>
            </ul>
          </div>

          {/* Industries */}
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+254 790 298 003</li>
              <li>jolugroup@gmail.com</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
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

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Jolu Group Security Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
