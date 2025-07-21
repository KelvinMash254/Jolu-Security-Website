// Hero.tsx
import React from 'react';
import './Hero.css';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero-section py-20 text-white">
      {/* Background Slideshow */}
      <div className="hero-background">
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Safety,<br />
          <span className="text-yellow-300">Our Commitment.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Protecting homes, businesses, and communities across Kenya with reliable, professional security services you can trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex flex-col items-center">
            <Button
              asChild
              size="lg"
              className="border border-white bg-transparent text-white text-lg px-8 py-4 flex items-center gap-2 animate-pulse transition-transform transform hover:scale-105 active:scale-95 hover:bg-red-600 hover:text-white"
            >
              <a href="tel:+254790298003">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          <Link to="/quote">
            <Button
              size="lg"
              className="border border-white bg-transparent text-white text-lg px-8 py-4 flex items-center gap-2 animate-pulse transition-transform transform hover:scale-105 active:scale-95 hover:bg-red-600 hover:text-white"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
