# Shader — Creative Development Studio

A clone/recreation of [shader.se](https://www.shader.se) — a creative development studio portfolio website featuring interactive 3D WebGL backgrounds, smooth scroll animations, and modern design.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **3D / WebGL:** [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Helpers:** [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis)
- **Fonts:** Geist Sans & Geist Mono (via `next/font`)

## Features

- Interactive 3D shader background with mouse-reactive deformations
- Floating particle system
- Smooth scroll powered by Lenis
- Scroll-triggered reveal animations (Framer Motion)
- Project carousel with animated transitions
- Client marquee with infinite scroll
- Responsive navigation with mobile hamburger menu
- Film grain overlay effect
- Cursor glow follow effect
- Modern dark theme with accent color

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, animations, scrollbar
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page composition
├── components/
│   ├── ShaderBackground.tsx # WebGL shader plane + particles
│   ├── Navigation.tsx       # Fixed nav with mobile menu
│   ├── Hero.tsx             # Hero section with text animations
│   ├── ProjectCarousel.tsx  # Work showcase carousel
│   ├── About.tsx            # About + services grid
│   ├── Marquee.tsx          # Infinite scrolling client logos
│   ├── CtaBanner.tsx        # Call-to-action section
│   ├── Contact.tsx          # Contact details section
│   ├── Footer.tsx           # Site footer
│   ├── CursorGlow.tsx       # Mouse-following glow effect
│   ├── GrainOverlay.tsx     # Film grain texture overlay
│   └── SmoothScrollProvider.tsx # Lenis scroll wrapper
├── hooks/
│   ├── useInView.ts         # Intersection Observer hook
│   ├── useMousePosition.ts  # Mouse position tracker
│   └── useSmoothScroll.ts   # Lenis initialization hook
└── shaders/
    ├── vertex.glsl          # Vertex shader
    ├── fragment.glsl        # Fragment shader
    └── shaders.d.ts         # GLSL TypeScript declarations
```

## Customization

- **Colors:** Edit CSS variables in `src/app/globals.css`
- **Projects:** Update the `projects` array in `src/components/ProjectCarousel.tsx`
- **Services:** Update the `services` array in `src/components/About.tsx`
- **Contact info:** Edit `src/components/Contact.tsx`
- **Shader appearance:** Modify uniforms in `src/components/ShaderBackground.tsx`
