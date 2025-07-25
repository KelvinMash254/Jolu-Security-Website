// src/pages/services/K9Unit.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const K9Unit = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Jolu-Security-Website/lovable-uploads/k9-unit.png')",
        }}
      >
        <div className="absolute inset-0 bg-red-900 bg-opacity-40 flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold text-center px-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            K9 Unit Services
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700 dark:text-red-400">
          Unmatched Security with Trained K9 Units
        </h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, our expertly trained K9 units provide
          unmatched detection, deterrence, and response capabilities across various environments.
          Whether it’s explosives, narcotics, or crowd management, our K9 teams bring discipline
          and precision to your security setup.
        </p>
        <p className="text-lg leading-8 mb-6">
          Each canine operates with a certified handler under strict operational standards,
          ensuring safety and effectiveness in both proactive and reactive security situations.
          Perfect for events, facilities, patrols, and rapid deployment.
        </p>
      </section>

      {/* Why Choose Us */}
      <section
        className="bg-gray-100 dark:bg-neutral-900 py-16 transition-colors duration-300"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-4 text-gray-900 dark:text-white">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Why Our K9 Services Stand Out
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Detection Accuracy
              </h4>
              <p>
                Our dogs are trained to detect explosives, narcotics, and contraband with
                remarkable precision in various environments.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Rapid Response
              </h4>
              <p>
                K9 teams can deploy quickly to high-risk or sensitive areas, providing mobile
                reinforcement and proactive threat mitigation.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Certified Handlers
              </h4>
              <p>
                Every K9 operates under the direction of a certified handler, ensuring control,
                safety, and consistent operational performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 bg-white dark:bg-neutral-900 text-black dark:text-white text-center transition-colors duration-300"
        data-aos="zoom-in"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Need Powerful K9 Security?
        </h3>
        <p className="text-lg mb-8">
          Deploy professionally trained K9 teams with Jolu Group Security for accurate detection,
          deterrence, and rapid response.
        </p>
        <Link to="/quote">
          <Button className="text-white bg-red-700 hover:bg-red-800 text-lg px-6 py-3">
            Request a Free Quote
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default K9Unit;
