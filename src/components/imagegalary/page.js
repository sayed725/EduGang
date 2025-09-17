"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
];

export default function ImageGallery() {
  const duplicateCount = 2;
  const animateDistance = `-${100 / duplicateCount}%`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-11/12 mx-auto mb-10"
    >
      <div className="max-w-7xl  mx-auto">
        {/* Header */}
        <div className="text-center mb-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore Our{" "}
              <span className="text-[#0f82fc]">College Gallery</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore cutting-edge research from leading institutions across
              various fields.
            </p>
          </motion.div>
        </div>

        {/* Marquee Bento Gallery */}
        <div className="overflow-hidden relative rounded-md">
          <motion.div
            animate={{ x: ["0%", animateDistance] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-8 h-[600px]"
          >
            {[...Array(duplicateCount)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-3 md:grid-cols-4 grid-rows-9 md:grid-rows-5 gap-2 md:gap-4"
              >
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-xl shadow-md bg-gray-200 ${
                      // Match grid placement exactly like your HTML
                      idx === 0
                        ? "col-start-1 row-start-1 col-span-2 row-span-2 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2"
                        : idx === 1
                        ? "col-start-3 row-start-1 row-span-2 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-3"
                        : idx === 2
                        ? "col-start-2 row-start-3 col-span-2 row-span-2 md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-2"
                        : idx === 3
                        ? "col-start-1 row-start-3 row-span-2 md:col-start-2 md:row-start-5 md:col-span-1 md:row-span-1"
                        : idx === 4
                        ? "col-start-1 row-start-5 col-span-3 row-span-2 md:col-start-3 md:row-start-4 md:col-span-2 md:row-span-2"
                        : idx === 5
                        ? "col-start-1 row-start-7 col-span-2 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-3"
                        : idx === 6
                        ? "col-start-3 row-start-7 row-span-2 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1"
                        : idx === 7
                        ? "col-start-1 row-start-8 col-span-2 md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-2"
                        : ""
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      width={1000}
                      height={500}
                      quality={100} // Make image super clear
                      className="w-full h-full object-cover rounded-xl"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
