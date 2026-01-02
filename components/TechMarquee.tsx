// components/TechMarquee.tsx
"use client";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function TechMarquee({
  speed = 90,
  items = ["React Native","Expo","TypeScript","Reanimated","Framer Motion","Nativewind","superbase","R3F","EAS","NativeWind","Firebase","SQLite","Jest","RN CLI","zustand","nodejs","expressjs","github"],
}:{ speed?: number; items?: string[] }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(20);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState<"left" | "right">("left");

  useLayoutEffect(() => {
    const measure = () => {
      const el = contentRef.current; if (!el) return;
      const loopWidth = el.scrollWidth / 2;
      setDistance(loopWidth);
      setDuration(loopWidth / speed);
    };
    measure();
    const ro = new ResizeObserver(measure);
    contentRef.current && ro.observe(contentRef.current);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [speed]);

  const row = [...items, ...items];

  return (
    <div className="gradient-wrap">
      <div className="gradient-inner" style={{ padding: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
          <div style={{ fontWeight: 800, color: "rgba(3, 3, 3, 0.9)" }}>Tech I use</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setPaused(p => !p)} className="pill" style={{ background: paused ? "rgba(255,255,255,.1)" : "transparent" }}>
              {paused ? "Resume" : "Pause"}
            </button>
            <button onClick={() => setDir(d => d === "left" ? "right" : "left")} className="pill">Dir: {dir}</button>
          </div>
        </div>
        <div style={{ overflow: "hidden", width: "100%", marginTop: 8 }}>
          <motion.div
            ref={contentRef}
            style={{ display: "inline-flex", gap: 14, whiteSpace: "nowrap", willChange: "transform" }}
            animate={distance > 0 && !paused ? (dir === "left" ? { x: [0, -distance] } : { x: [-distance, 0] }) : { x: 0 }}
            transition={distance > 0 && !paused ? { duration, ease: "linear", repeat: Infinity } : undefined}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {row.map((t, i) => (
              <span key={`${t}-${i}`} className="pill" aria-hidden={i >= items.length}>
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}