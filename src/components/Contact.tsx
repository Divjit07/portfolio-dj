"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-6 block"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              Let&apos;s create something{" "}
              <span className="text-[var(--accent)]">extraordinary</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--muted)] text-lg leading-relaxed mb-8"
            >
              Contact us about your digital project idea or general enquiries. 
              Let&apos;s interface, call us today!
            </motion.p>
          </div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-3 block">
                New Business
              </span>
              <a
                href="mailto:hello@yourdomain.com"
                className="text-2xl md:text-3xl font-semibold hover:text-[var(--accent)] transition-colors duration-300"
              >
                hello@yourdomain.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-3 block">
                Location
              </span>
              <p className="text-lg text-[var(--foreground)]">
                Stockholm, Sweden
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-6 mt-4"
            >
              {["LinkedIn", "Twitter/X", "GitHub", "Dribbble"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300 uppercase tracking-[0.15em]"
                  >
                    {platform}
                  </a>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
