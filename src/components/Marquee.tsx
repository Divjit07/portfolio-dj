"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const techStack = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "PYTHON",
  "NODE.JS",
  "THREE.JS",
  "AWS",
  "DOCKER",
  "FIREBASE",
  "POSTGRESQL",
  "LARAVEL",
  "FLUTTER",
  "OPENAI",
  "PRISMA",
  "TAILWIND",
];

export default function Marquee() {
  const { ref, isInView } = useInView(0.1);

  return (
    <div ref={ref} className="py-16 overflow-hidden border-y border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="marquee">
          <div className="marquee-content">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="text-xl md:text-3xl font-bold tracking-tight text-white/[0.06] mx-6 md:mx-10 whitespace-nowrap hover:text-[var(--accent)]/30 transition-colors duration-500 select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
