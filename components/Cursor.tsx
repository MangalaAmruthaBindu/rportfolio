// components/Cursor.tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX); my.set(e.clientY);
      const root = document.documentElement;
      root.style.setProperty("--x", `${e.clientX}px`);
      root.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ translateX: sx, translateY: sy, x: "-50%", y: "-50%", position: "fixed", width: 8, height: 8, borderRadius: "50%", background: "#fff", zIndex: 10000, mixBlendMode: "difference" }} />
      <motion.div className="cursor-ring" style={{ translateX: sx, translateY: sy, x: "-50%", y: "-50%", position: "fixed", width: 36, height: 36, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.7)", zIndex: 10000, mixBlendMode: "difference" }} />
      <div className="cursor-spotlight" style={{
        position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none",
        background: "radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), rgba(127,0,255,0.15), transparent 60%)"
      }} />
    </>
  );
}