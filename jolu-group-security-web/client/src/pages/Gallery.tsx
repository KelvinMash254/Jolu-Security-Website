// src/pages/Gallery.tsx
import React from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const galleryItems = [
  "/gallery/Best Image.jpeg",
  "/gallery/Events Security.jpg",
  "/gallery/1.jpeg",
  "/gallery/15.jpeg",
  "/gallery/2.jpeg",
  "/gallery/14.jpeg",
  "/gallery/3.jpeg",
  "/gallery/13.jpeg",
  "/gallery/4.jpeg",
  "/gallery/12.jpeg",
  "/gallery/5.jpeg",
  "/gallery/11.jpeg",
  "/gallery/6.jpeg",
  "/gallery/10.jpeg",
  "/gallery/7.jpeg",
  "/gallery/9.jpeg",
  "/gallery/8.jpeg",
];

const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-red-700 w-full max-w-[100px] mx-auto mt-2"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
          viewport={{ once: true }}
        >
          {galleryItems.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-60 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
