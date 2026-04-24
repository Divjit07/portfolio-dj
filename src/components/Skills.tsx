"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    color: "#6C63FF",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "PHP",
      "Java",
      "SQL",
      "Dart/Flutter",
      "HTML5",
      "CSS3",
      "Bash",
    ],
  },
  {
    title: "Frontend & Mobile",
    color: "#00D4AA",
    skills: [
      "React.js",
      "Next.js",
      "Flutter",
      "Three.js",
      "Framer Motion",
      "Tailwind CSS",
      "shadcn/ui",
      "Angular",
      "FullCalendar v6",
      "Figma",
    ],
  },
  {
    title: "Backend & APIs",
    color: "#FF6B6B",
    skills: [
      "Node.js",
      "Express.js",
      "Laravel",
      "RESTful API Design",
      "GraphQL",
      "Postman",
      "MCP Server Integration",
      "MVC Architecture",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "#FFB347",
    skills: [
      "AWS (EC2, S3, IAM, Lambda)",
      "Firebase",
      "Docker",
      "Vercel",
      "Netlify",
      "Neon PostgreSQL",
      "CI/CD",
    ],
  },
  {
    title: "AI & Machine Learning",
    color: "#E040FB",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "LLM Integration",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter",
      "Streamlit",
      "Big Data (Hadoop)",
    ],
  },
  {
    title: "Databases",
    color: "#40C4FF",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Oracle DB",
      "SQL Server",
      "Firebase Firestore",
      "Prisma ORM",
      "Mongoose ODM",
    ],
  },
  {
    title: "Security & Auth",
    color: "#69F0AE",
    skills: [
      "JWT",
      "OAuth 2.0",
      "RBAC",
      "Better Auth",
      "Session Management",
      "Secure API Design",
      "Data Encryption",
    ],
  },
  {
    title: "Tools & Practices",
    color: "#FF80AB",
    skills: [
      "Git/GitHub",
      "GitFlow",
      "Docker",
      "Vitest",
      "Playwright",
      "Jest",
      "Vite",
      "Agile/Scrum",
      "Linux",
      "Networking",
    ],
  },
];

export default function Skills() {
  const { ref: sectionRef, isInView } = useInView(0.05);

  return (
    <section id="skills" className="relative py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider mb-24" />

        <div ref={sectionRef}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-6 block font-mono"
          >
            02 / Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + catIdx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-white/10 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + catIdx * 0.08 + skillIdx * 0.03,
                      }}
                      className="skill-pill px-3 py-1.5 rounded-full text-xs text-[var(--foreground)]/80 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
