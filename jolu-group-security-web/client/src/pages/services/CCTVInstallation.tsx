// src/pages/services/CCTVInstallation.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer"; // ✅ Make sure this path is correct

const CCTVInstallation = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/e069cbc0-c281-4e74-9c20-c24ba110c9d6.png')" }}
      >
        <div className="absolute inset-0 bg-red-800 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            CCTV Installation & Surveillance
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700">Smarter Surveillance, Safer Spaces</h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, we provide modern, reliable CCTV installation services to secure residential, commercial, and industrial properties. Whether you need basic coverage or a high-tech multi-camera system, we design custom solutions to fit your site and your needs.
        </p>
        <p className="text-lg leading-8 mb-6">
          From installation and configuration to remote access and maintenance, our expert technicians ensure seamless operation and high-quality footage, helping you monitor activities and deter threats in real time or after the fact.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">Why Our CCTV Services Stand Out</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Tailored System Design</h4>
              <p>We assess your premises and customize a CCTV setup that covers all critical entry points and blind spots.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Remote Monitoring</h4>
              <p>Access your CCTV feeds from anywhere in real-time using your phone, tablet, or computer—anytime, anywhere.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Professional Installation</h4>
              <p>Our technicians ensure clean wiring, optimal camera angles, and full system testing before handing over the solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Secure What Matters Most</h3>
        <p className="text-lg mb-8">Install a smart CCTV system with Jolu Group Security and monitor your property with confidence.</p>
        <Link to="/#contact">
          <Button className="text-red-700 bg-white hover:bg-gray-200 text-lg px-6 py-3">Request a Free Quote</Button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CCTVInstallation;
