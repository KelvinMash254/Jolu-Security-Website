// src/pages/services/AlarmResponse.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer"; // ✅ Make sure this path is correct

const AlarmResponse = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
          style={{
    backgroundImage: `url(${import.meta.env.VITE_API_URL}/lovable-uploads/alarm-response.png)`
  }}
      >
        <div className="absolute inset-0 bg-red-800 bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Rapid Alarm Response Services
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700">Quick Action, Trusted Protection</h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, our Alarm Response Services are built to react swiftly to triggered alarms at your premises, minimizing response times and maximizing threat mitigation. Our mobile patrol units are trained to handle emergencies with precision and urgency.
        </p>
        <p className="text-lg leading-8 mb-6">
          We ensure 24/7 monitoring, professional dispatch coordination, and incident reporting to give you confidence that help is always moments away. Whether for businesses or homes, our goal is to safeguard your people, property, and peace of mind.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">Why Our Alarm Response Stands Out</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Rapid Response</h4>
              <p>Our security team is on standby 24/7, ready to act immediately when an alarm is triggered at your property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Mobile Patrol Units</h4>
              <p>Strategically placed patrol teams respond quickly with full awareness of your property layout and risk profile.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Detailed Incident Reporting</h4>
              <p>Every response includes a full report so you stay informed about what happened and the steps taken on your behalf.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Alarm Coverage?</h3>
        <p className="text-lg mb-8">Count on JOLU Group Security for fast, professional alarm response whenever and wherever you need it.</p>
        <Link to="/#contact">
          <Button className="text-red-700 bg-white hover:bg-gray-200 text-lg px-6 py-3">Request a Free Quote</Button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AlarmResponse;
