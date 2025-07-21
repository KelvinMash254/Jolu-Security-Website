import React from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const galleryItems = [
  { src: `${import.meta.env.BASE_URL}gallery/best-image.jpeg`, caption: "JOLU Guards During an Event in Naivasha" },
  { src: `${import.meta.env.BASE_URL}gallery/events-security.jpg`, caption: "Events Security in Action" },
  { src: `${import.meta.env.BASE_URL}gallery/1.jpeg`, caption: "K9 Unit Briefing" },
  { src: `${import.meta.env.BASE_URL}gallery/15.jpeg`, caption: "Nakuru Guard Deployment" },
  { src: `${import.meta.env.BASE_URL}gallery/2.jpeg`, caption: "Trained Security Guards Guarding an Event in Rift Valley" },
  { src: `${import.meta.env.BASE_URL}gallery/14.jpeg`, caption: "Nairobi Team Deployment" },
  { src: `${import.meta.env.BASE_URL}gallery/3.jpeg`, caption: "Security Guard on Alert During an Event" },
  { src: `${import.meta.env.BASE_URL}gallery/13.jpeg`, caption: "Operation Managers Impromptu Visit" },
  { src: `${import.meta.env.BASE_URL}gallery/4.jpeg`, caption: "Our Security Team During a Dinner" },
  { src: `${import.meta.env.BASE_URL}gallery/12.jpeg`, caption: "A Deployment for Guards in Nairobi" },
  { src: `${import.meta.env.BASE_URL}gallery/5.jpeg`, caption: "Naivasha Dinner" },
  { src: `${import.meta.env.BASE_URL}gallery/11.jpeg`, caption: "Client Site Protection" },
  { src: `${import.meta.env.BASE_URL}gallery/6.jpeg`, caption: "Guarding an Event - Kenya Urban Forum" },
  { src: `${import.meta.env.BASE_URL}gallery/10.jpeg`, caption: "On-Site Inspection" },
  { src: `${import.meta.env.BASE_URL}gallery/7.jpeg`, caption: "Kenya Urban Forum Security" },
  { src: `${import.meta.env.BASE_URL}gallery/9.jpeg`, caption: "Team Strategy Session" },
  { src: `${import.meta.env.BASE_URL}gallery/8.jpeg`, caption: "Annual Company Dinner" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250428-WA0021.jpg`, caption: "Assignment in Kangemi" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250428-WA0095.jpg`, caption: "Managing Director and General Manager" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250428-WA0100.jpg`, caption: "Photo Session" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250428-WA0102.jpg`, caption: "Briefing Before Deployment" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250428-WA0106.jpg`, caption: "Deployment Taskforce" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250428-WA0107.jpg`, caption: "Our Team" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250720-WA0058.jpg`, caption: "During our Monthly Meeting at HQ" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250720-WA0061.jpg`, caption: "Nakuru Team" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250720-WA0064.jpg`, caption: "Photo Session After Nakuru Meeting " },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250720-WA0067.jpg`, caption: "The Men in our Team" },
  { src: `${import.meta.env.BASE_URL}gallery/IMG-20250720-WA0069.jpg`, caption: "Kangemi Photoshoot" },
];

const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 inline-block border-b-4 border-red-700 pb-1">
            Gallery
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm px-4 text-center">
                {item.caption}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
