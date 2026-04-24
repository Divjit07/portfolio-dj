"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiCode, FiCloud, FiCpu, FiDatabase } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Full-Stack Engineering",
    description:
      "React, Next.js, TypeScript, Node.js, Laravel — from Figma wireframe to production deployment.",
  },
  {
    icon: FiCpu,
    title: "AI & LLM Systems",
    description:
      "Intelligent routing layers, ML pipelines, and LLM integrations with OpenAI and Anthropic APIs.",
  },
  {
    icon: FiCloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Docker, Firebase, Vercel — containerized deployments with CI/CD and serverless architectures.",
  },
  {
    icon: FiDatabase,
    title: "Data & Analytics",
    description:
      "PostgreSQL, MongoDB, data analytics, business intelligence, and machine learning pipelines.",
  },
];

const stats = [
  { value: "86.7", label: "GPA" },
  { value: "7+", label: "Projects Deployed" },
  { value: "10+", label: "Technologies" },
  { value: "3", label: "Deployed Brand Sites" },
];

export default function About() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.1);
  const { ref: cardsRef, isInView: cardsInView } = useInView(0.05);
  const { ref: statsRef, isInView: statsInView } = useInView(0.1);

  return (
    <section id="about" className="relative py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider mb-24" />

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24">
          <div ref={titleRef}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-6 block font-mono"
            >
              01 / About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]"
            >
              Building software that{" "}
              <span className="text-gradient">solves real problems</span>{" "}
              at scale
            </motion.h2>
          </div>

          <div className="flex flex-col gap-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--muted)] text-base md:text-lg leading-relaxed"
            >
              Innovative IT graduate from Humber Polytechnic (GPA: 86.7) with a portfolio of 
              production-deployed applications across full-stack web, cloud infrastructure, 
              AI systems, and data analytics.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[var(--muted)] text-base md:text-lg leading-relaxed"
            >
              Proficient in an enterprise-grade stack — React, Next.js, TypeScript, Node.js, 
              PHP/Laravel, Flutter, AWS, Docker, Firebase, and MCP server integrations. 
              Experienced in agile teams, RESTful APIs, machine learning pipelines, and 
              secure authentication.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[var(--muted)] text-base md:text-lg leading-relaxed"
            >
              Passionate about building software that solves real problems at scale, 
              from AI-driven routing systems to enterprise scheduling platforms.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.01]"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-divider mb-24" />

        {/* Highlights */}
        <div ref={cardsRef}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-6 block font-mono"
          >
            What I Do
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-4xl font-bold tracking-tight mb-14"
          >
            Core Capabilities
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group p-7 rounded-2xl border border-white/5 bg-white/[0.015] hover:bg-[var(--accent)]/5 hover:border-[var(--accent)]/20 transition-all duration-500"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--accent)]/20 transition-colors duration-300">
                    <Icon className="text-[var(--accent)]" size={20} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
