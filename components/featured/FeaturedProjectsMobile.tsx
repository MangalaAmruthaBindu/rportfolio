// components/featured/FeaturedProjectsMobile.tsx
"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";

export default function FeaturedProjectsMobile() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 22, fontWeight: 800 }}
        >
          Projects
        </motion.h2>
        <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>Swipe to see more →</div>

        <div
          className="fp-scroll"
          style={{
            marginTop: 12,
            display: "flex",
            gap: 12,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            paddingBottom: 6,
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link ?? "#"}
              style={{ scrollSnapAlign: "center", minWidth: 280, maxWidth: 280, display: "block" }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="gradient-wrap">
                <div className="gradient-inner" style={{ padding: 10 }}>
                  <div
                    style={{
                      height: 140,
                      borderRadius: 12,
                      overflow: "hidden",
                      background: p.color,
                      position: "relative",
                    }}
                  >
                    {/* Centered project image (big and attention-grabbing) */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        placeItems: "center",
                        padding: 6,
                        zIndex: 1, // above glow
                        pointerEvents: "none",
                      }}
                    >
                      <img
                        src={p.image ?? "/images/fp1.png"}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        draggable={false}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          filter: "drop-shadow(0 10px 24px rgba(0,0,0,.5))",
                          userSelect: "none",
                        }}
                      />
                    </div>

                    {/* Subtle moving glow (behind image) */}
                    <motion.div
                      style={{
                        position: "absolute",
                        right: -18,
                        bottom: -14,
                        width: 120,
                        height: 120,
                        background:
                          "radial-gradient(circle, rgba(255,255,255,.15) 0%, transparent 60%)",
                        filter: "blur(12px)",
                        zIndex: 0,
                      }}
                      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontWeight: 800 }}>{p.title}</div>
                    <div style={{ color: "rgba(255,255,255,.8)", marginTop: 4 }}>{p.desc}</div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                      {p.tags.map((t) => (
                        <motion.span key={t} className="pill" whileTap={{ scale: 1.05 }}>
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <style jsx>{`
          .fp-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          .fp-scroll::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
}