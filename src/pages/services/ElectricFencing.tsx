// src/pages/services/ElectricFencing.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer"; // ✅ Make sure this path is correct

const ElectricFencing = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
       style={{
    backgroundImage: `url(${import.meta.env.VITE_API_URL}/lovable-uploads/electric-fence.png)`
  }}
      >
        <div className="absolute inset-0 bg-red-800 bg-opacity-20 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Electric Fencing Solutions
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700">Protect Your Perimeter with Confidence</h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, our electric fencing solutions are designed to deliver maximum perimeter protection while deterring unauthorized entry. Whether for residential, commercial, or industrial properties, our systems provide a visible, effective line of defense.
        </p>
        <p className="text-lg leading-8 mb-6">
          We use high-quality equipment integrated with alarm systems and access control to offer a powerful security layer. Our trained technicians ensure clean installation, compliance with safety standards, and full system functionality—giving you peace of mind, day and night.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">Why Choose Our Electric Fencing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">High-Voltage Deterrence</h4>
              <p>Our systems deliver a non-lethal but highly effective electric shock that deters intruders and alerts security teams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">24/7 Monitoring</h4>
              <p>We integrate fencing with alarms and real-time notifications, ensuring your perimeter is under watch around the clock.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Custom Installations</h4>
              <p>We tailor fencing layouts to your specific property size, shape, and threat profile, ensuring complete coverage and aesthetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Perimeter Today</h3>
        <p className="text-lg mb-8">Get a professionally installed electric fence and elevate your property's security.</p>
        <Link to="/#contact">
          <Button className="text-red-700 bg-white hover:bg-gray-200 text-lg px-6 py-3">Request a Free Quote</Button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ElectricFencing;
