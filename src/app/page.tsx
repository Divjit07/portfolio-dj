"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCarousel from "@/components/ProjectCarousel";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import CtaBanner from "@/components/CtaBanner";
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
        <ProjectCarousel />
        <Marquee />
        <About />
        <CtaBanner />
        <Contact />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
