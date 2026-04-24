"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    title: "Interactive 3D & WebGL",
    description:
      "WebGL experiments, interactive product visualizations, and immersive 3D experiences that push the boundaries of what's possible in a browser.",
  },
  {
    title: "AI-Driven Experiences",
    description:
      "Generative AI integrations, intelligent interfaces, and data-driven experiences that adapt and respond to user behavior.",
  },
  {
    title: "3D Design & Animation",
    description:
      "High-fidelity 3D modeling, texturing, and animation for product visualization, brand storytelling, and digital campaigns.",
  },
  {
    title: "UI & Motion Design",
    description:
      "Crafting interfaces that feel alive through micro-interactions, scroll-driven animations, and fluid transitions.",
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web development with modern frameworks, serverless architectures, and performant, scalable solutions.",
  },
  {
    title: "Creative Consulting",
    description:
      "Strategic guidance on digital experiences, prototyping new ideas, and bridging creative ambition with technical execution.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Global Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Passion Driven" },
];

export default function About() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.1);
  const { ref: bodyRef, isInView: bodyInView } = useInView(0.1);
  const { ref: servicesRef, isInView: servicesInView } = useInView(0.05);
  const { ref: statsRef, isInView: statsInView } = useInView(0.1);

  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
          <div ref={titleRef}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-6 block"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              Making Digital Storytelling More{" "}
              <span className="text-[var(--accent)]">Playful</span>,{" "}
              <span className="text-gradient">Powerful</span>, and{" "}
              <span className="italic font-light">Alive</span>
            </motion.h2>
          </div>

          <div ref={bodyRef} className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={bodyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--muted)] text-lg leading-relaxed"
            >
              A creative development studio specialized in building interactive 3D and 
              AI solutions for the web. Serious about business, based in Sweden, and 
              working with brands, agencies and designers worldwide.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={bodyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[var(--muted)] text-lg leading-relaxed"
            >
              While we&apos;re a small team of creative engineers, we have a hand-picked 
              network of collaborators: designers, 3D artists, copywriters, animators, 
              and creative technologists, ready to plug in with an array of capabilities.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={bodyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[var(--muted)] text-lg leading-relaxed"
            >
              We build storytelling platforms that demand attention and reward curiosity. 
              We push digital mediums to places you haven&apos;t seen before. We combine 
              technical expertise with a designer&apos;s eye, ensuring that every interaction 
              feels natural and every pixel is perfectly placed.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
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
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />

        {/* Services */}
        <div ref={servicesRef}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-6 block"
          >
            What We Do
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
          >
            Our Capabilities
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full border border-[var(--accent)]/30 flex items-center justify-center mb-6 group-hover:border-[var(--accent)] transition-colors duration-300">
                  <span className="text-xs font-mono text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
