// src/pages/MannedGuarding.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const MannedGuarding = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Jolu-Security-Website/lovable-uploads/manned-guarding.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-red-800 bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Professional Manned Guarding Services
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700">
          Your Security is Our Priority
        </h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, we deliver top-tier manned guarding
          services designed to protect your residential, commercial, and industrial
          properties. Our team of highly trained, licensed, and vetted security personnel
          are equipped to prevent unauthorized access, manage risk, and provide peace of
          mind 24/7.
        </p>
        <p className="text-lg leading-8 mb-6">
          Whether it's safeguarding entry points, monitoring activities, conducting
          patrols, or handling emergencies, our guards are prepared to uphold the highest
          standards of vigilance and professionalism. We tailor our guarding services to
          suit your unique needs — ensuring reliability, discretion, and total coverage.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">
            What Sets Our Manned Guarding Apart
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Trained Professionals</h4>
              <p>
                Our guards undergo rigorous training in threat detection, customer
                handling, emergency response, and surveillance protocols.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">24/7 Protection</h4>
              <p>
                Whether you need constant coverage or flexible shifts, our team is
                available round the clock to protect your assets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Custom Security Plans</h4>
              <p>
                We tailor our guarding services based on your site’s layout, threat level,
                operations, and budget needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Property?</h3>
        <p className="text-lg mb-8">
          Let’s help you create a secure environment with professional manned guarding
          services.
        </p>
        <Link to="/#contact">
          <Button className="text-red-700 bg-white hover:bg-gray-200 text-lg px-6 py-3">
            Request a Free Quote
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default MannedGuarding;
