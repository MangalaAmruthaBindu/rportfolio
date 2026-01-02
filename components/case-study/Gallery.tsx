// components/case-study/Gallery.tsx
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import type { CaseStudy } from "../data/caseStudies";

export default function Gallery({ cs }: { cs: CaseStudy }) {
  const [active, setActive] = useState<number | null>(null);
  if (!cs.screenshots?.length) return null;

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (active !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  return (
    <section className="section">
      <div className="container">
        <FadeIn>
          <h2 className="text-[clamp(20px,3vw,28px)] font-extrabold">Screens & flows</h2>
        </FadeIn>

        {/* Horizontal scroll, snap, hide scrollbars */}
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cs.screenshots.map((s, i) => (
            <motion.div
              key={s.alt + i}
              className="min-w-[300px] max-w-[300px] snap-center cursor-pointer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              aria-label={`Enlarge ${s.alt}`}
            >
              {/* Gradient frame */}
              <div className="relative rounded-xl p-[1px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(127,0,255,.7),rgba(225,0,255,.7),rgba(127,0,255,.7))]">
                <motion.div
                  layoutId={`frame-${i}`}
                  className="relative h-[200px] overflow-hidden rounded-xl border border-white/10 backdrop-blur-md"
                  style={{ background: s.color || cs.color || "rgba(255,255,255,0.05)" }}
                  aria-label={s.alt}
                >
                  {s.src ? (
                    <div className="absolute inset-0 grid place-items-center p-2 z-[1]">
                      <motion.img
                        layoutId={`img-${i}`}
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full object-contain select-none filter [filter:drop-shadow(0_8px_20px_rgba(0,0,0,.35))]"
                      />
                    </div>
                  ) : null}

                  {/* Subtle moving glow behind image */}
                  <motion.div
                    className="absolute -right-5 -bottom-3 h-[140px] w-[140px] blur-[12px] z-0 bg-[radial-gradient(circle,rgba(255,255,255,.15)_0%,transparent_60%)]"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>

              <div className="mt-1.5 text-center text-[color:var(--muted)]">{s.alt}</div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {active !== null && cs.screenshots[active] && (
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Screenshot preview"
            >
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Centered content (clicks inside shouldn't close) */}
              <div
                className="fixed inset-0 grid place-items-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-[min(92vw,1100px)]">
                  <div className="relative rounded-2xl p-[1px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(127,0,255,.7),rgba(225,0,255,.7),rgba(127,0,255,.7))]">
                    <motion.div
                      layoutId={`frame-${active}`}
                      className="relative h-[min(86vh,760px)] overflow-hidden rounded-2xl border border-white/10"
                      style={{
                        background:
                          cs.screenshots[active].color || cs.color || "rgba(255,255,255,0.05)",
                      }}
                    >
                      {/* Close button */}
                      <button
                        onClick={() => setActive(null)}
                        aria-label="Close preview"
                        className="absolute right-3 top-3 z-10 rounded-lg border border-white/20 bg-black/40 px-3 py-1.5 text-sm text-white hover:bg-black/50"
                      >
                        Close
                      </button>

                      {/* Large image */}
                      {cs.screenshots[active].src ? (
                        <motion.img
                          layoutId={`img-${active}`}
                          src={cs.screenshots[active].src as string}
                          alt={cs.screenshots[active].alt}
                          className="absolute inset-0 h-full w-full select-none object-contain"
                        />
                      ) : null}

                      {/* Soft glow */}
                      <div className="pointer-events-none absolute -right-7 -bottom-6 h-[280px] w-[280px] blur-[14px] bg-[radial-gradient(circle,rgba(255,255,255,.15)_0%,transparent_60%)]" />
                    </motion.div>
                  </div>

                  {/* Caption */}
                  <div className="mt-2 text-center text-sm text-[color:var(--muted)]">
                    {cs.screenshots[active].alt}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}