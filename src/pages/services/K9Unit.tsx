// src/pages/services/K9Unit.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer"; // ✅ Ensure the path is correct

const K9Unit = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL}/lovable-uploads/k9-unit.png)` }}
      >
        <div className="absolute inset-0 bg-red-800 bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            K9 Unit Services
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700">Unmatched Security with Trained K9 Units</h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, our expertly trained K9 units add a heightened layer of protection for a variety of security operations. From narcotics and explosives detection to perimeter patrols and crowd control, our dogs are reliable, fast-acting, and professionally handled.
        </p>
        <p className="text-lg leading-8 mb-6">
          These highly skilled canine teams operate under strict protocols, ensuring effective threat detection while upholding safety and professionalism. Whether it's a high-profile event, facility patrol, or rapid response need, our K9s stand ready.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">Why Our K9 Services Stand Out</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Detection Accuracy</h4>
              <p>Our dogs are trained to detect contraband, weapons, and explosives with remarkable precision and calmness.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Rapid Response</h4>
              <p>K9 units can immediately respond to high-alert scenarios, offering a mobile and effective security presence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-bold text-lg text-red-700 mb-2">Professional Handlers</h4>
              <p>Each dog is paired with a certified handler who ensures control, safety, and mission-ready performance at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Need Powerful K9 Security?</h3>
        <p className="text-lg mb-8">Contact us for specialized K9 deployment tailored to your unique security needs.</p>
        <Link to="/#contact">
          <Button className="text-red-700 bg-white hover:bg-gray-200 text-lg px-6 py-3">Request a Free Quote</Button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default K9Unit;
