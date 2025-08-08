import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MannedGuarding = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/manned-guarding.png)`,
        }}
      >
        <div className="absolute inset-0 bg-red-900 bg-opacity-40 flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold text-center px-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Professional Manned Guarding Services
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-black dark:text-white"
          data-aos="fade-up"
        >
          Your Security is Our Priority
        </h2>
        <p className="text-lg leading-8 mb-6" data-aos="fade-up" data-aos-delay="100">
          At <strong>Jolu Group Security</strong>, we deliver top-tier manned guarding
          services designed to protect your residential, commercial, and industrial
          properties. Our team of highly trained, licensed, and vetted security personnel
          are equipped to prevent unauthorized access, manage risk, and provide peace of
          mind 24/7.
        </p>
        <p className="text-lg leading-8 mb-6" data-aos="fade-up" data-aos-delay="200">
          Whether it's safeguarding entry points, monitoring activities, conducting
          patrols, or handling emergencies, our guards are prepared to uphold the highest
          standards of vigilance and professionalism. We tailor our guarding services to
          suit your unique needs — ensuring reliability, discretion, and total coverage.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3
            className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10"
            data-aos="fade-up"
          >
            What Sets Our Manned Guarding Apart
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Trained Professionals
              </h4>
              <p>
                Our guards undergo rigorous training in threat detection, customer
                handling, emergency response, and surveillance protocols.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                24/7 Protection
              </h4>
              <p>
                Whether you need constant coverage or flexible shifts, our team is
                available round the clock to protect your assets.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Custom Security Plans
              </h4>
              <p>
                We tailor our guarding services based on your site’s layout, threat level,
                operations, and budget needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-neutral-900 text-black dark:text-white text-center">
        <h3
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-up"
        >
          Ready to Secure Your Property?
        </h3>
        <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
          Let’s help you create a secure environment with professional manned guarding
          services.
        </p>
        <Link to="/quote">
          <Button
            className="bg-red-700 text-white hover:bg-red-800 text-lg px-6 py-3"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Request a Free Quote
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default MannedGuarding;
