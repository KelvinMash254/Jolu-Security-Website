// src/pages/services/VIPCloseProtection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer"; // ✅ Ensure this path is correct

const VIPCloseProtection = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
          style={{
    backgroundImage: `url(${import.meta.env.VITE_API_URL}/lovable-uploads/vip-close-protection.png)`
  }}
      >
        <div className="absolute inset-0 bg-red-800 bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            VIP Close Protection
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700">Elite Personal Security</h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, we understand that high-profile individuals, executives, and dignitaries face unique and dynamic threats. Our VIP Close Protection services are tailored to deliver discreet, effective, and round-the-clock personal security.
        </p>
        <p className="text-lg leading-8 mb-6">
          Our expertly trained protection officers operate with precision and discretion, ensuring your safety without compromising your comfort or mobility. From route planning and surveillance to real-time threat response, we offer comprehensive protection wherever you go.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">Why Clients Trust Our VIP Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Discreet and Professional</h4>
              <p>Our personnel blend into your environment, ensuring seamless protection without drawing attention or disrupting your routine.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Highly Trained Officers</h4>
              <p>Each protection agent is trained in close-quarter defense, surveillance detection, evasive driving, and emergency medical response.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Confidential & Customizable</h4>
              <p>We prioritize confidentiality and tailor every security detail to your lifestyle, itinerary, risk level, and personal preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Need Private Security You Can Rely On?</h3>
        <p className="text-lg mb-8">Reach out to us today for trusted VIP close protection services anywhere in Kenya and beyond.</p>
        <Link to="/#contact">
          <Button className="text-red-700 bg-white hover:bg-gray-200 text-lg px-6 py-3">Request a Free Quote</Button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VIPCloseProtection;
