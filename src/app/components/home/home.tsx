"use client";
import { motion } from "framer-motion";

export default function Home() {
  const brands = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"];

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex space-x-8"
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}>
          {brands.map((brand, index) => (
            <div key={index} className="text-lg font-bold whitespace-nowrap">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
