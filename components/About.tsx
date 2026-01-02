// components/About.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="section">
      <div className="container grid grid-2" style={{ alignItems: "center" }}>
        <FadeIn>
          <div>
            <h2 style={{ fontSize: "clamp(22px,3.6vw,32px)", fontWeight: 800 }}>About</h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>
              4+ years building React Native apps (Expo & bare), focused on animations (Reanimated,
              Framer Motion), performance, and clean architecture.
            </p>
            <div className="grid" style={{ marginTop: 16 }}>
              {[
                "Animations & Micro‑interactions",
                "Offline‑first & Sync",
                "Testing & CI/CD (EAS, Fastlane)",
                "Store readiness & monitoring",
              ].map((t, i) => (
                <div key={i} className="card">{t}</div>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div style={{ y }}>
          <div
            className="card"
            style={{
              height: 260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, rgba(127,0,255,0.25), rgba(225,0,255,0.18))",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div className="title-gradient" style={{ fontWeight: 800, fontSize: 28 }}>#7F00FF</div>
              <div style={{ color: "var(--muted)" }}>Violet brand vibe</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}