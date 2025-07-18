// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const navigate = useNavigate();

  let aboutTimeout: NodeJS.Timeout;
  let servicesTimeout: NodeJS.Timeout;

  const handleAboutEnter = () => {
    clearTimeout(aboutTimeout);
    setOpenAbout(true);
  };

  const handleAboutLeave = () => {
    aboutTimeout = setTimeout(() => setOpenAbout(false), 200);
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout);
    setOpenServices(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout = setTimeout(() => setOpenServices(false), 200);
  };

  const handleQuoteClick = () => {
    navigate("/quote");
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/609259d6-4c6b-4219-a763-13ae779e9163.png"
              alt="JOLU Group Security Ltd"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-lg font-bold text-gray-900">JOLU GROUP SECURITY</span>
          </Link>

          <div className="hidden md:flex space-x-8 relative">
            <Link to="/" className="text-gray-700 hover:text-red-600 font-medium">Home</Link>

            <div className="relative" onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
              <button className="text-gray-700 hover:text-red-600 font-medium">About</button>
              {openAbout && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 min-w-[180px] z-50">
                  <a href="/#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
                  <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</Link>
                  <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gallery</Link>
                  <a href="/#documents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Company Profile & Brochure</a>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
              <button className="text-gray-700 hover:text-red-600 font-medium">Services</button>
              {openServices && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 min-w-[220px] z-50">
                  <Link to="/services/manned-guarding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Manned Guarding</Link>
                  <Link to="/services/events-security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Events Security</Link>
                  <Link to="/services/k9-unit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">K9 Unit Services</Link>
                  <Link to="/services/cctv-installation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CCTV Installation</Link>
                  <Link to="/services/electric-fencing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Electric Fencing</Link>
                  <Link to="/services/alarm-response" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Alarm Response</Link>
                  <Link to="/services/vip-close-protection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">VIP Close Protection</Link>
                </div>
              )}
            </div>

            <a href="/#industries" className="text-gray-700 hover:text-red-600 font-medium">Industries</a>
            <a href="/#why-choose-us" className="text-gray-700 hover:text-red-600 font-medium">Why Choose Us</a>
            <a href="/#contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
            <Link to="/blogs" className="text-gray-700 hover:text-red-600 font-medium">Blogs</Link>
          </div>

          {/* Updated Quote Button */}
          <Button
            className="bg-red-600 hover:bg-red-700 text-white hidden md:inline-block"
            onClick={handleQuoteClick}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
