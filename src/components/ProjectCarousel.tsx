"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
  year: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "3D Product Visualizer",
    category: "WebGL / Interactive",
    description:
      "An immersive product visualization platform with real-time 3D rendering, dynamic lighting, and interactive material exploration.",
    color: "#1a1a2e",
    year: "2025",
    tags: ["Three.js", "React", "WebGL"],
  },
  {
    id: 2,
    title: "AI-Driven Experience",
    category: "AI / Creative Tech",
    description:
      "A generative AI experience that creates unique visual narratives based on user interaction and real-time data streams.",
    color: "#162447",
    year: "2025",
    tags: ["Machine Learning", "WebGPU", "Node.js"],
  },
  {
    id: 3,
    title: "Interactive Brand Platform",
    category: "Brand / Digital",
    description:
      "A scroll-driven storytelling platform for a global brand, featuring fluid animations, 3D elements, and responsive design.",
    color: "#1b1b2f",
    year: "2024",
    tags: ["Next.js", "GSAP", "Three.js"],
  },
  {
    id: 4,
    title: "AR Product Launch",
    category: "AR / Mobile",
    description:
      "An augmented reality experience that lets users visualize products in their space with photorealistic rendering.",
    color: "#0f3460",
    year: "2024",
    tags: ["WebXR", "React Native", "ARKit"],
  },
  {
    id: 5,
    title: "Digital Showroom",
    category: "3D / E-commerce",
    description:
      "A virtual showroom experience with photorealistic environments, real-time product configuration, and seamless checkout.",
    color: "#1a1a40",
    year: "2024",
    tags: ["Three.js", "Next.js", "Shopify"],
  },
];

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isInView } = useInView(0.1);

  const activeProject = projects[activeIndex];

  const next = () => setActiveIndex((i) => (i + 1) % projects.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="work" ref={sectionRef} className="relative py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Browse our project carousel
            <br />
            <span className="text-[var(--muted)]">to explore our selected work.</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ backgroundColor: activeProject.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Decorative grid */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" className="absolute inset-0">
                        <defs>
                          <pattern
                            id={`grid-${activeProject.id}`}
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 40 0 L 0 0 0 40"
                              fill="none"
                              stroke="white"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#grid-${activeProject.id})`}
                        />
                      </svg>
                    </div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.15 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/20"
                    />
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full border border-white/20"
                    />

                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 0.2, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-[8rem] md:text-[14rem] font-black text-white select-none"
                    >
                      {String(activeProject.id).padStart(2, "0")}
                    </motion.span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2 block">
                      {activeProject.category} — {activeProject.year}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold mb-3">
                      {activeProject.title}
                    </h3>
                    <p className="text-white/60 max-w-lg text-sm md:text-base leading-relaxed mb-4">
                      {activeProject.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                aria-label="Previous project"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                aria-label="Next project"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-mono text-[var(--muted)]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((activeIndex + 1) / projects.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="text-sm font-mono text-[var(--muted)]">
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
