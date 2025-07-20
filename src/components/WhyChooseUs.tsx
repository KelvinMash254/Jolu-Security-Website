import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Zap, Target, Star } from "lucide-react";
import { WhyChooseUsCard } from "@/components/ui/WhyChooseUsCard";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Licensed & Compliant",
    description: "We follow all government and industry regulations to ensure legal, secure operations.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Trained Security Personnel",
    description: "Our guards are professionally trained and equipped to respond to any situation.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Availability",
    description: "You can count on us any time, day or night, for continuous protection.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Technology-Driven",
    description: "We integrate modern tools like CCTV, patrol trackers, and alarms into your security plan.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Custom Solutions",
    description: "We tailor security plans for your property or business.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Trusted by Clients",
    description: "We serve residential, corporate, and public institutions with excellence and professionalism.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white rounded-2xl shadow-md p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Why Choose Jolu Group Security
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Clients across Kenya trust us because we provide reliable, professional, and tailored security solutions that work.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <WhyChooseUsCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
