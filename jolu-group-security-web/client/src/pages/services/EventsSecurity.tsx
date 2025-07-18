// src/pages/services/EventsSecurity.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer"; // ✅ Confirm this path matches your project

const EventsSecurity = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/a43900e9-b8a7-4fd1-a598-31db9ec4f29a.png')" }}
      >
        <div className="absolute inset-0 bg-red-800 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Events Security Services
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700">Flawless Security for Memorable Events</h2>
        <p className="text-lg leading-8 mb-6">
          <strong>Jolu Group Security</strong> delivers specialized security services for events of all sizes — from corporate functions and private parties to concerts, conferences, and public gatherings. Our team ensures a safe and controlled environment without disrupting the experience.
        </p>
        <p className="text-lg leading-8 mb-6">
          We understand the dynamics of crowd behavior, VIP protection, and emergency preparedness. Our approach includes access control, perimeter monitoring, incident response, and coordination with local authorities. Let us handle security so you can focus on success.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">What Makes Our Event Security Exceptional</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Trained Event Guards</h4>
              <p>Our security personnel are experienced in managing crowds, handling emergencies, and protecting high-profile attendees.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Discreet & Professional</h4>
              <p>We ensure your event runs smoothly without unnecessary disruption or intimidation—just peace of mind.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Custom Event Plans</h4>
              <p>We assess the venue, guest list, and nature of the event to deploy the right team with the right protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Host Your Event Securely with Jolu</h3>
        <p className="text-lg mb-8">Our experts are ready to protect your guests, assets, and reputation—flawlessly.</p>
        <Link to="/#contact">
          <Button className="text-red-700 bg-white hover:bg-gray-200 text-lg px-6 py-3">Request a Free Quote</Button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsSecurity;
