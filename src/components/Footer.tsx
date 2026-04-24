"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[var(--accent)]">D</span>IVJIT SINGH
            </span>
            <span className="text-sm text-[var(--muted)]">
              &copy; {currentYear} All rights reserved
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/Divjit07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/divjitsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-xs text-[var(--muted)]/60">
              Built with Next.js, Three.js & Framer Motion
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
