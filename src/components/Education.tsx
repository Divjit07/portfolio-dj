"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiAward, FiBookOpen, FiGlobe, FiHeart } from "react-icons/fi";

const coursework = [
  "Machine Learning",
  "Deep Learning",
  "Big Data 1 & 2",
  "Data Analytics",
  "Business Intelligence",
  "Advanced Java",
  "Web Frameworks 1 & 2",
  "Database Design & SQL",
  "Oracle DB",
  "SQL Server Administration",
  "Advanced Operating Systems",
  "Capstone Project",
  "Project Management",
];

const additionalInfo = [
  {
    icon: FiGlobe,
    title: "Languages",
    items: ["English (Fluent)", "Punjabi (Native)"],
  },
  {
    icon: FiHeart,
    title: "Interests",
    items: [
      "AI & Emerging Tech",
      "MCP Ecosystems",
      "Open-Source",
      "UI/UX Design",
      "FinTech",
      "Cloud Architecture",
    ],
  },
  {
    icon: FiAward,
    title: "Soft Skills",
    items: [
      "Agile/Scrum",
      "Technical Documentation",
      "Team Leadership (6-member teams)",
      "Fast Learner",
    ],
  },
];

export default function Education() {
  const { ref: sectionRef, isInView } = useInView(0.1);

  return (
    <section id="education" className="relative py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider mb-24" />

        <div ref={sectionRef}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-6 block font-mono"
          >
            04 / Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
          >
            Academic <span className="text-gradient">Background</span>
          </motion.h2>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.015] mb-8 overflow-hidden group hover:border-[var(--accent)]/15 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] via-[#00D4AA] to-[#FF6B6B]" />
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FiBookOpen className="text-[var(--accent)]" size={22} />
                  <h3 className="text-xl md:text-2xl font-bold">
                    Diploma — Information Technology
                  </h3>
                </div>
                <p className="text-[var(--muted)] text-base">
                  Humber Polytechnic &middot; Toronto, ON
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-[var(--muted)] mb-1">
                  Sept 2024 – Apr 2026
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                  <FiAward className="text-[var(--accent)]" size={14} />
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    GPA: 86.7
                  </span>
                </div>
                <div className="text-xs text-[var(--muted)] mt-1">
                  Expected Graduation: June 19, 2026
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] text-[var(--foreground)] mb-4 font-semibold">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
                    className="skill-pill px-3 py-1.5 rounded-full text-xs text-[var(--foreground)]/80"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {additionalInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-white/10 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                      <Icon className="text-[var(--accent)]" size={16} />
                    </div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.15em]">
                      {info.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {info.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--muted)]"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-[var(--accent)]/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
