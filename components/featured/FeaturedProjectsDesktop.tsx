// components/featured/FeaturedProjectsDesktop.tsx
"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import Tilt3D from "../ui/Tilt3D";

export default function FeaturedProjectsDesktop() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(22px,3.6vw,32px)", fontWeight: 800 }}
        >
          Featured projects
        </motion.h2>

        <div className="grid grid-2" style={{ marginTop: 18 }}>
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link ?? "#"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              style={{ display: "block" }}
            >
              <Tilt3D max={10}>
                <div className="gradient-wrap">
                  <div className="gradient-inner" style={{ padding: 12, position: "relative" }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: 14,
                        overflow: "hidden",
                        height: 180,
                        background: p.color,
                      }}
                    >
                      {/* Centered project image */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "grid",
                          placeItems: "center",
                          padding: 8,
                          zIndex: 1,           // above the glow
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
                            objectFit: "contain", // big and centered, fits within the area
                            filter: "drop-shadow(0 10px 24px rgba(0,0,0,.5))",
                            userSelect: "none",
                          }}
                        />
                      </div>

                      {/* Subtle moving glow (kept as-is, sits behind image) */}
                      <motion.div
                        style={{
                          position: "absolute",
                          inset: "-50% -50% auto auto",
                          width: 240,
                          height: 240,
                          background:
                            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)",
                          filter: "blur(10px)",
                          zIndex: 0,
                        }}
                        animate={{ x: [0, 80, 0], y: [0, -60, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>

                    <div style={{ padding: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            background: "var(--accent)",
                            boxShadow: "0 0 18px var(--accent)",
                          }}
                        />
                        <div style={{ fontWeight: 800, fontSize: 18 }}>{p.title}</div>
                      </div>
                      <div style={{ color: "var(--muted)", marginTop: 6 }}>{p.desc}</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                        {p.tags.map((t) => (
                          <motion.span
                            key={t}
                            className="pill"
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.45 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}