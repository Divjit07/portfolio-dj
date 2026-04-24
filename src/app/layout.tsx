import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divjit Singh — LLM Engineer & Full-Stack Developer",
  description:
    "Portfolio of Divjit Singh — LLM Engineer, Software Developer, and Web Developer based in Toronto, ON. Building scalable solutions from AI systems to full-stack web applications.",
  keywords: [
    "Divjit Singh",
    "LLM Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Three.js",
    "AI",
    "Toronto",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
