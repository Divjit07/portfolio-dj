"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const clients = [
  "VOLVO",
  "IKEA",
  "H&M",
  "SPOTIFY",
  "KLARNA",
  "ERICSSON",
  "NORTHVOLT",
  "OATLY",
  "DANIEL WELLINGTON",
  "HUSQVARNA",
];

export default function Marquee() {
  const { ref, isInView } = useInView(0.1);

  return (
    <div ref={ref} className="py-20 overflow-hidden border-y border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="marquee">
          <div className="marquee-content">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-bold tracking-tight text-white/10 mx-8 md:mx-12 whitespace-nowrap hover:text-white/30 transition-colors duration-500"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
