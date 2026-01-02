// components/Hero.tsx
"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import DeviceShowcase from "./DeviceShowcase";
import TechMarquee from "./TechMarquee";
import { useState } from "react";

const NAME = "Mangala AmruthaBindu";
const SPECIALTY = "React Native Mobile Developer";

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="bg-aurora" />
      <div className="bg-grid" />
      <div className="bg-noise" />

      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Centered layout; side-by-side from md+ */}
        <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left: name + specialty + CTA */}
          <div className="flex w-full flex-col items-center text-center">
            <Name3D text={NAME} />

            <FadeIn delay={0.12}>
              <h2 className="mt-2 text-[clamp(16px,3vw,22px)] font-extrabold">
                {SPECIALTY}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-4 max-w-[680px] text-[color:var(--muted)]">
                Fast, polished apps with delightful micro‑interactions, offline‑first data, and store‑ready performance.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a className="btn btn-accent" href="#projects">View projects</a>
                <a className="btn btn-outline" href="#contact">Hire me</a>
              </div>
            </FadeIn>
          </div>

          {/* Right: centered device */}
          <FadeIn delay={0.1} y={24}>
            <div className="flex w-full justify-center">
              <div className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px]">
                <DeviceShowcase />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl px-4">
        <TechMarquee />
      </div>
    </section>
  );
}

/* 3D animated name with TailwindCSS styling */
function Name3D({ text }: { text: string }) {
  const [hovered, setHovered] = useState(false);

  // Smooth 3D tilt values
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useSpring(mvX, { stiffness: 180, damping: 20, mass: 0.6 });
  const rotateY = useSpring(mvY, { stiffness: 180, damping: 20, mass: 0.6 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const MAX = 10;
    mvX.set(-(py * MAX));
    mvY.set(px * MAX);
  };

  const onLeave = () => {
    mvX.set(0);
    mvY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      className="relative select-none [transform-style:preserve-3d] [perspective:900px]"
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      animate={{ y: hovered ? 0 : [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.h1
        className="
          title-gradient text-center
          text-[clamp(36px,6vw,64px)] font-black leading-[1.05] tracking-[-0.02em]
          [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]
          [text-shadow:0_1px_0_rgba(0,0,0,.25),0_4px_10px_rgba(0,0,0,.25),0_12px_28px_rgba(0,0,0,.22)]
          filter [filter:saturate(115%)]
        "
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.6 }}
      >
        {text}
      </motion.h1>

      {/* Soft radial glow behind name */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute left-1/2 top-1/2 h-[220%] w-[220%]
            -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl
            bg-[radial-gradient(circle_at_50%_50%,rgba(127,0,255,0.18),transparent_55%)]
          "
        />
      </div>
    </motion.div>
  );
}