"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Marquee from "@/components/Marquee";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const ShaderBackground = dynamic(
  () => import("@/components/ShaderBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScrollProvider>
      <ShaderBackground />
      <CursorGlow />
      <GrainOverlay />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Marquee />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
