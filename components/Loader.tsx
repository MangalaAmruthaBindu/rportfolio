// components/Loader.tsx
"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const TOTAL = 1.2; // seconds

  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>(TOTAL.toFixed(1));
  const [percent, setPercent] = useState(0);

  // Progress 0 -> 100
  const p = useMotionValue(0);

  useEffect(() => {
    const controls = animate(p, 100, { duration: TOTAL, ease: "easeInOut" });

    // Update timer + percent as it animates
    const unsub = p.on("change", (v) => {
      setPercent(Math.round(v));
      const left = Math.max(TOTAL - (v / 100) * TOTAL, 0);
      setTimeLeft(left.toFixed(1));
    });

    // Unmount after a quick fade-out
    const t = setTimeout(() => setDone(true), (TOTAL + 0.45) * 1000);

    return () => {
      controls.stop();
      unsub();
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  return (
    <motion.div
      // Full-screen overlay
      className="fixed left-0 top-0 z-[99999] w-screen bg-[#07020f]"
      style={{
        // Visual viewport height for mobile Safari/Chrome (true center)
        height: "100dvh",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.45, delay: TOTAL }}
      aria-label="Loading"
    >
      {/* Ambient glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 10%, rgba(127,0,255,0.25), transparent 50%), radial-gradient(700px 350px at 80% 20%, rgba(225,0,255,0.22), transparent 55%)",
        }}
      />

      {/* Center content wrapper (guaranteed center on mobile & desktop) */}
      <div
        className="grid h-full w-full place-items-center px-4"
        style={{
          // Respect safe areas on notched devices
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
      >
        <div className="flex flex-col items-center">
          {/* Spinner + photologo (responsive size via clamp) */}
          <div
            className="relative"
            style={{
              width: "clamp(64px, 18vw, 110px)",
              height: "clamp(64px, 18vw, 110px)",
            }}
          >
            {/* Outer SVG sweep spinner */}
            <motion.svg
              viewBox="0 0 80 80"
              className="absolute"
              style={{
                inset: "-12px",
                height: "calc(100% + 24px)",
                width: "calc(100% + 24px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              aria-hidden
            >
              <defs>
                <linearGradient id="loader-sweep" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--accent2)" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="40"
                cy="40"
                r="30"
                fill="none"
                stroke="url(#loader-sweep)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="188"
                initial={{ strokeDashoffset: 188 }}
                animate={{ strokeDashoffset: [188, 60, 188] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 12px rgba(127,0,255,.45))" }}
              />
            </motion.svg>

            {/* Inner dashed ring (counter-rotating) */}
            <motion.svg
              viewBox="0 0 80 80"
              className="absolute"
              style={{
                inset: "-6px",
                height: "calc(100% + 12px)",
                width: "calc(100% + 12px)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              aria-hidden
            >
              <circle
                cx="40"
                cy="40"
                r="30"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                strokeDasharray="6 10"
              />
            </motion.svg>

            {/* Soft halo behind */}
            <div
              className="absolute rounded-full blur-2xl"
              style={{
                inset: "-16px",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(127,0,255,0.25), transparent 60%)",
              }}
              aria-hidden
            />

            {/* Photologo (center) with gentle pulse/bob */}
            <motion.img
              src="/images/photologo.png"
              alt="Logo"
              draggable={false}
              loading="eager"
              decoding="sync"
              className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-2 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)]"
              animate={{ scale: [1, 1.045, 1], y: [0, -1.5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Timer chip (centered) */}
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="rounded-full bg-black/45 px-2 py-[2px] text-[10px] sm:text-[11px] font-semibold text-white/95 backdrop-blur-[2px]">
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Percent text below */}
          <motion.div
            className="mt-2 text-[10px] sm:text-xs text-white/60"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            aria-live="polite"
          >
            {percent}%
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}