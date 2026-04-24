"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  bullets: string[];
  color: string;
  links?: { label: string; url: string; icon: "external" | "github" }[];
}

const projects: Project[] = [
  {
    title: "LLM Cost Autopilot",
    subtitle: "AI Routing & Cost Optimization Engine",
    tech: ["Python", "FastAPI", "OpenAI", "Anthropic", "Scikit-learn", "Docker", "Streamlit"],
    bullets: [
      "Intelligent LLM routing layer classifying prompt complexity and routing to cheapest capable model across OpenAI, GPT-4o-mini, Claude Sonnet, Claude Haiku, and Ollama",
      "60%+ cost reduction vs single-model deployment with async LLM-as-judge verification loop that auto-escalates failures",
      "Self-improving feedback loop that retrains the complexity classifier using routing failure data — zero manual intervention",
      "Production-grade FastAPI service containerized with Docker; Streamlit dashboard showing savings across 500+ live requests",
    ],
    color: "#6C63FF",
  },
  {
    title: "College Scheduler",
    subtitle: "Enterprise Timetable Management System",
    tech: ["Next.js 16", "React 19", "TypeScript", "Neon PostgreSQL", "Prisma", "Better Auth", "Playwright"],
    bullets: [
      "Constraint-satisfaction scheduling engine with real-time validation for 1,000+ academic course placements",
      "Serverless Neon PostgreSQL with Prisma ORM, multi-schema architecture and auto-scaling connection pooling",
      "Public REST API layer with Bearer token auth for microservices interoperability with external teams",
      "RBAC (ADMIN/SCHEDULER/DEFAULT) with middleware-enforced authorization and full undo/rollback via transaction-based state management",
    ],
    color: "#00D4AA",
  },
  {
    title: "MarketWatch",
    subtitle: "Real-Time Stock & Investment Tracker",
    tech: ["JavaScript", "Firebase Auth", "Firestore", "REST APIs", "Vercel"],
    bullets: [
      "Full-stack investor platform with Firebase Auth (sign-up, sign-in, password recovery) and secure session management",
      "Live financial market APIs surfacing real-time stock prices, share movements, and portfolio performance analytics",
      "Interactive dashboards with price history, volume trends, and personalized watchlists persisted in Firestore",
    ],
    color: "#FF6B6B",
  },
  {
    title: "AutoShop Pro",
    subtitle: "Vehicle Management SaaS Platform",
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "Firebase", "REST API"],
    bullets: [
      "Multi-tenant SaaS platform for automotive repair shops — inventory, work orders, customer records, and invoicing",
      "Real-time inventory tracking with low-stock alerts, parts catalog, and supplier management with role-based dashboards",
      "Billing engine with service history logging and automated report generation; containerized with Docker",
    ],
    color: "#FFB347",
  },
  {
    title: "RoomieMatch",
    subtitle: "Student Housing Platform",
    tech: ["Laravel", "PHP 8+", "MySQL", "Tailwind CSS", "Docker", "Blade"],
    bullets: [
      "Secure authentication and real-time contact/messaging system built within a 4-developer agile team",
      "Multi-filter housing matching algorithm (gender, amenities, pet-friendly, ensuite) with admin dashboard",
      "PSR-12 standards, containerized dev environment with Docker, full MySQL migration and seeder lifecycle",
    ],
    color: "#E040FB",
  },
  {
    title: "Airbnb Neo",
    subtitle: "Listing Management System",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman", "Vercel"],
    bullets: [
      "Full CRUD listing platform with pagination, search/filter, session-based favorites, and form validation",
      "RESTful endpoints with Mongoose ODM for MongoDB integration; deployed on Vercel with responsive UI",
    ],
    color: "#40C4FF",
  },
  {
    title: "Premium Brand Experiences",
    subtitle: "3 Deployed Brand Websites",
    tech: ["React", "Three.js", "Framer Motion", "Figma", "HTML5", "CSS3"],
    bullets: [
      "Franck Muller Smurfette luxury watch landing page, Puma Nitro Elite e-commerce platform, and Navaan Sandhu Waymaker artist platform",
      "Three.js 3D product renders, Framer Motion scroll animations, interactive cart systems, and pixel-perfect responsive layouts",
    ],
    color: "#69F0AE",
    links: [
      { label: "Franck Muller", url: "#", icon: "external" },
      { label: "Puma", url: "#", icon: "external" },
      { label: "Waymaker", url: "#", icon: "external" },
    ],
  },
];

export default function Projects() {
  const { ref: sectionRef, isInView } = useInView(0.02);

  return (
    <section id="projects" className="relative py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider mb-24" />

        <div ref={sectionRef}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-6 block font-mono"
          >
            03 / Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[var(--muted)] text-base md:text-lg max-w-2xl mb-16 leading-relaxed"
          >
            A selection of production-deployed projects spanning AI systems, SaaS platforms, 
            real-time applications, and premium brand experiences.
          </motion.p>

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="project-card group relative p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.015] overflow-hidden"
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-500 group-hover:w-1.5"
                  style={{ backgroundColor: project.color }}
                />

                {/* Hover glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -translate-y-1/2 translate-x-1/2"
                  style={{ backgroundColor: project.color + "10" }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          className="text-xl md:text-2xl font-bold group-hover:text-[var(--foreground)] transition-colors"
                          style={{ color: project.color }}
                        >
                          {project.title}
                        </h3>
                        {project.links && (
                          <div className="flex gap-2">
                            {project.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                                title={link.label}
                              >
                                {link.icon === "external" ? (
                                  <FiExternalLink size={16} />
                                ) : (
                                  <FiGithub size={16} />
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-[var(--muted)] font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:max-w-sm">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider border rounded-full text-[var(--muted)] border-white/10 bg-white/[0.02]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {project.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm text-[var(--muted)] leading-relaxed"
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
