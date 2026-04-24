"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const roles = [
  "LLM Engineer",
  "Software Developer",
  "Web Developer",
  "Data Analyst",
];

function TypingRole() {
  const [display, setDisplay] = useState("");
  const state = useRef({ roleIndex: 0, charIndex: 0, isDeleting: false });

  useEffect(() => {
    const tick = () => {
      const s = state.current;
      const current = roles[s.roleIndex];

      if (!s.isDeleting && s.charIndex < current.length) {
        s.charIndex++;
      } else if (!s.isDeleting && s.charIndex === current.length) {
        s.isDeleting = true;
        return 2000;
      } else if (s.isDeleting && s.charIndex > 0) {
        s.charIndex--;
      } else {
        s.isDeleting = false;
        s.roleIndex = (s.roleIndex + 1) % roles.length;
      }

      setDisplay(roles[s.roleIndex].substring(0, s.charIndex));
      return s.isDeleting ? 40 : 80;
    };

    let timeout: NodeJS.Timeout;
    const schedule = () => {
      const delay = tick();
      timeout = setTimeout(schedule, delay);
    };
    schedule();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="text-[var(--accent)]">
      {display}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-[var(--accent)] ml-1 align-middle"
      />
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return <section className="h-screen" />;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-block px-4 py-1.5 border border-[var(--accent)]/20 rounded-full text-xs uppercase tracking-[0.3em] text-[var(--accent)] bg-[var(--accent)]/5">
            Available for Opportunities
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)]">
            <FiMapPin className="text-[var(--accent)]" />
            Toronto, ON
          </span>
        </motion.div>

        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1] tracking-tight mb-2">
          {["DIVJIT", "SINGH"].map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-3xl font-light mb-8 h-[1.4em]"
        >
          <TypingRole />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-[var(--muted)] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
        >
          Innovative IT graduate with production-deployed applications across full-stack web,
          cloud infrastructure, AI systems, and data analytics. Architecting scalable solutions
          from Figma wireframe to live deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:divjitsingh2001@yahoo.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-full hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            <FiMail size={16} />
            Get in Touch
          </a>
          <a
            href="tel:+14374502129"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 rounded-full text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-300"
          >
            <FiPhone size={16} />
            +1 (437) 450-2129
          </a>
          <a
            href="https://linkedin.com/in/divjitsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/Divjit07"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[var(--accent)]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
