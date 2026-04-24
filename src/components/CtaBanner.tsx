"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function CtaBanner() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Ready to take your
            <br />
            <span className="text-[var(--accent)]">brand to the next level?</span>
          </h2>
          <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Review our portfolio, crunch the numbers, and you&apos;ll see the trajectory 
            points one way: up. The future of your business is waiting. Let&apos;s execute.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--accent)] text-black font-semibold rounded-full text-lg hover:shadow-[0_0_40px_rgba(200,255,0,0.3)] transition-shadow duration-500"
          >
            Book a Call Today
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
