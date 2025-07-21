import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({ about: false, services: false });
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

  let aboutTimeout: NodeJS.Timeout;
  let servicesTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Handle dark mode class toggle and persistence
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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

  const handleQuoteClick = () => navigate("/quote");

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}jolu-logo.png`}
              alt="JOLU Group Security Ltd"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-lg font-bold text-gray-900 dark:text-white">
              JOLU GROUP SECURITY
            </span>
          </Link>

          {/* ✅ Dark Mode Toggle (desktop) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 mr-2 hidden md:inline-block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 relative items-center">
            <Link to="/" className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Home</Link>

            <div className="relative" onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
              <button className="text-gray-700 dark:text-white hover:text-red-600 font-medium">About</button>
              {openAbout && (
                <div className="absolute bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 min-w-[180px] z-50">
                  <a href={`${base}#about`} className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">About Us</a>
                  <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Our Team</Link>
                  <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Gallery</Link>
                  <a href={`${base}#documents`} className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Company Profile & Brochure</a>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
              <button className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Services</button>
              {openServices && (
                <div className="absolute bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 min-w-[220px] z-50">
                  <Link to="/services/manned-guarding" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Manned Guarding</Link>
                  <Link to="/services/events-security" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Events Security</Link>
                  <Link to="/services/k9-unit" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">K9 Unit</Link>
                  <Link to="/services/cctv-installation" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">CCTV Installation</Link>
                  <Link to="/services/electric-fencing" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Electric Fencing</Link>
                  <Link to="/services/alarm-response" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Alarm Response</Link>
                  <Link to="/services/vip-close-protection" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">VIP Protection</Link>
                </div>
              )}
            </div>

            <a href={`${base}#industries`} className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Industries</a>
            <a href={`${base}#why-choose-us`} className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Why Choose Us</a>
            <a href={`${base}#contact`} className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Contact</a>
            <Link to="/blogs" className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Blogs</Link>
          </div>

          <Button className="bg-red-600 hover:bg-red-700 text-white hidden md:inline-block" onClick={handleQuoteClick}>
            Get Quote
          </Button>

          {/* Hamburger Icon */}
          <button className="md:hidden text-gray-700 dark:text-white" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${sidebarOpen ? "bg-black bg-opacity-50" : "pointer-events-none opacity-0"}`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
            <span className="font-bold text-lg text-gray-800 dark:text-white">Menu</span>
            <button onClick={() => setSidebarOpen(false)}><X className="h-6 w-6 text-gray-700 dark:text-white" /></button>
          </div>

          <nav className="p-5 space-y-4">
            <Link to="/" onClick={() => setSidebarOpen(false)} className="text-gray-700 dark:text-white hover:text-red-600 block">Home</Link>

            <div>
              <button
                onClick={() => setMobileDropdown((prev) => ({ ...prev, about: !prev.about }))}
                className="flex items-center justify-between w-full text-gray-700 dark:text-white hover:text-red-600"
              >
                About <ChevronDown className="h-4 w-4" />
              </button>
              {mobileDropdown.about && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  <a href={`${base}#about`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">About Us</a>
                  <Link to="/team" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Our Team</Link>
                  <Link to="/gallery" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Gallery</Link>
                  <a href={`${base}#documents`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Documents</a>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileDropdown((prev) => ({ ...prev, services: !prev.services }))}
                className="flex items-center justify-between w-full text-gray-700 dark:text-white hover:text-red-600"
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {mobileDropdown.services && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  <Link to="/services/manned-guarding" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Manned Guarding</Link>
                  <Link to="/services/events-security" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Events Security</Link>
                  <Link to="/services/k9-unit" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">K9 Unit</Link>
                  <Link to="/services/cctv-installation" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">CCTV Installation</Link>
                  <Link to="/services/electric-fencing" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Electric Fencing</Link>
                  <Link to="/services/alarm-response" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Alarm Response</Link>
                  <Link to="/services/vip-close-protection" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">VIP Protection</Link>
                </div>
              )}
            </div>

            <a href={`${base}#industries`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Industries</a>
            <a href={`${base}#why-choose-us`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Why Choose Us</a>
            <a href={`${base}#contact`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Contact</a>
            <Link to="/blogs" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600">Blogs</Link>

            <button
              onClick={() => {
                setSidebarOpen(false);
                navigate("/quote");
              }}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4 w-full"
            >
              Get Quote
            </button>

            {/* ✅ Dark mode toggle for mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center text-gray-700 dark:text-white hover:text-yellow-400 mt-4 w-full"
            >
              {darkMode ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
