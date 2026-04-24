"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider mb-24" />

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-6 block font-mono"
            >
              05 / Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              Let&apos;s build something{" "}
              <span className="text-gradient">extraordinary</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--muted)] text-base md:text-lg leading-relaxed mb-10"
            >
              I&apos;m currently open to full-time positions and freelance opportunities.
              Whether you need a full-stack developer, an AI/LLM engineer, or someone 
              to bring your ideas to life — let&apos;s connect.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="mailto:divjitsingh2001@yahoo.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-full text-base hover:shadow-[0_0_40px_rgba(108,99,255,0.4)] transition-all duration-500 hover:scale-105"
            >
              <FiMail size={18} />
              Send me an Email
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-[var(--accent)]/15 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <FiMail className="text-[var(--accent)]" size={16} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Email
                </span>
              </div>
              <a
                href="mailto:divjitsingh2001@yahoo.com"
                className="text-lg md:text-xl font-semibold hover:text-[var(--accent)] transition-colors duration-300"
              >
                divjitsingh2001@yahoo.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-[var(--accent)]/15 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <FiPhone className="text-[var(--accent)]" size={16} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Phone
                </span>
              </div>
              <a
                href="tel:+14374502129"
                className="text-lg md:text-xl font-semibold hover:text-[var(--accent)] transition-colors duration-300"
              >
                +1 (437) 450-2129
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-[var(--accent)]/15 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <FiMapPin className="text-[var(--accent)]" size={16} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Location
                </span>
              </div>
              <p className="text-lg md:text-xl font-semibold">
                Toronto, ON, Canada
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 mt-2"
            >
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/divjitsingh", Icon: FaLinkedin },
                { label: "GitHub", href: "https://github.com/Divjit07", Icon: FaGithub },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-300"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
