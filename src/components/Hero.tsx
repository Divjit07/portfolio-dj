"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const headingWords = ["A", "Creative", "Development", "Studio,"];
const subWords = ["Plugged", "into", "the", "Future"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="h-screen" />;

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Creative Studio
          </span>
        </motion.div>

        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight">
          {headingWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
          <br />
          {subWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${
                  word === "Future" ? "text-[var(--accent)]" : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 text-[var(--muted)] text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Building interactive 3D and AI solutions for the web. Based in Sweden, 
          working with brands worldwide.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
