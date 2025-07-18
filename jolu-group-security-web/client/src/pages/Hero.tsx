// Hero.tsx
import React from 'react';
import './Hero.css';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const Hero = ({ onQuoteClick }: { onQuoteClick: () => void }) => {
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+254790298003" className="inline-block">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us: +254 790 298 003
            </Button>
          </a>

          <Button
            size="lg"
            onClick={onQuoteClick}
            className="border border-white bg-transparent text-white text-lg px-8 py-4 flex items-center gap-2 animate-pulse transition-transform transform hover:scale-105 active:scale-95"
          >
            <span className="text-white">Get Free Quote</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
