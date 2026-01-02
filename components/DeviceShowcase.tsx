// // components/DeviceShowcase.tsx
// "use client";
// import { motion } from "framer-motion";

// const screens = [
//   {
//     title: "GermanVocab amrutha · Quiz",
//     desc: "SRS + audio micro‑interactions",
//     bg: "linear-gradient(135deg,#12002b,#2b0066)",
//     accent: "#7F00FF",
//     img: "/images/mockup1.png",
//   },
//   {
//     title: "YatriMitra · Itinerary",
//     desc: "Offline maps & deep links",
//     bg: "linear-gradient(135deg,#001b2e,#003e5a)",
//     accent: "#00d0ff",
//     img: "/images/mockup2.png",
//   },
  
// ];

// export default function DeviceShowcase() {
//   return (
//     <div className="phone-shell">
//       <div className="phone-screen">
//         <motion.div
//           style={{ height: "300%", position: "absolute", width: "100%" }}
//           animate={{ y: ["0%", "-100%", "-200%", "0%"] }}
//           transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
//         >
//           {screens.map((s, i) => (
//             <div key={i} style={{ height: "33.333%", width: "100%", padding: 12 }}>
//               <div className="gradient-wrap" style={{ height: "100%" }}>
//                 <div
//                   className="gradient-inner"
//                   style={{ height: "100%", background: s.bg, position: "relative" }}
//                 >
//                   {/* Content stays above the centered image */}
//                   <div style={{ padding: 14, position: "relative", zIndex: 2 }}>
//                     <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                       <span
//                         style={{
//                           width: 10,
//                           height: 10,
//                           borderRadius: 5,
//                           background: s.accent,
//                           boxShadow: `0 0 18px ${s.accent}`,
//                         }}
//                       />
//                       <div style={{ fontWeight: 800, fontSize: 16 }}>{s.title}</div>
//                     </div>
//                     <div style={{ marginTop: 6, color: "rgba(255,255,255,.85)" }}>{s.desc}</div>
//                     <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
//                       {["Expo", "Reanimated", "NativeWind"].map((t) => (
//                         <span key={t} className="pill">
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Big, centered image fitted within the card */}
//                   {s.img ? (
//                     <div
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         display: "grid",
//                         placeItems: "center",
//                         padding: 8, // small inner margin so it doesn't touch edges
//                         zIndex: 1, // below text, above glow
//                         pointerEvents: "none",
//                       }}
//                     >
//                       <img
//                         src={s.img}
//                         alt=""
//                         aria-hidden="true"
//                         loading="lazy"
//                         draggable={false}
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "contain", // fills the area while preserving aspect ratio
//                           filter: "drop-shadow(0 10px 24px rgba(0,0,0,.5))",
//                           userSelect: "none",
//                         }}
//                       />
//                     </div>
//                   ) : null}

//                   {/* Accent glow stays behind */}
//                   <motion.div
//                     style={{
//                       position: "absolute",
//                       right: -20,
//                       bottom: -10,
//                       width: 160,
//                       height: 160,
//                       background: `radial-gradient(circle, ${s.accent}33 0%, transparent 60%)`,
//                       filter: "blur(12px)",
//                       zIndex: 0,
//                     }}
//                     animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
//                     transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// components/DeviceShowcase.tsx
"use client";
import { motion } from "framer-motion";

const screens = [
  {
    title: "GermanVocab amrutha · Quiz",
    desc: "SRS + audio micro‑interactions",
    bg: "linear-gradient(135deg,#12002b,#2b0066)",
    accent: "#7F00FF",
    img: "/images/mockup1.png",
  },
  {
    title: "YatriMitra · Itinerary",
    desc: "Offline maps & deep links",
    bg: "linear-gradient(135deg,#001b2e,#003e5a)",
    accent: "#00d0ff",
    img: "/images/mockup2.png",
  },
];

export default function DeviceShowcase() {
  // Responsive animation based on number of screens
  const trackHeight = `${screens.length * 100}%`;
  const rowHeight = `${100 / screens.length}%`;
  const positions = Array.from({ length: screens.length }, (_, i) => `-${i * 100}%`);
  const yAnim = [...positions, "0%"];
  const duration = 7 * screens.length;

  return (
    <div className="mx-auto">
      <div className="phone-shell">
        <div className="phone-screen relative">
          <motion.div
            className="absolute inset-0 w-full"
            style={{ height: trackHeight }}
            animate={{ y: yAnim }}
            transition={{ duration, ease: "easeInOut", repeat: Infinity }}
          >
            {screens.map((s, i) => (
              <div key={i} className="w-full p-3" style={{ height: rowHeight }}>
                <div className="gradient-wrap h-full rounded-2xl">
                  <div
                    className="gradient-inner relative h-full overflow-hidden rounded-2xl"
                    style={{ background: s.bg }}
                  >
                    {/* Foreground content */}
                    <div className="relative z-[2] p-3.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-[10px] w-[10px] rounded-full"
                          style={{ background: s.accent, boxShadow: `0 0 18px ${s.accent}` }}
                        />
                        <div className="text-[15px] sm:text-[16px] font-extrabold">{s.title}</div>
                      </div>
                      <div className="mt-1.5 text-white/85 text-[13px] sm:text-[14px]">{s.desc}</div>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {["Expo", "Reanimated", "NativeWind"].map((t) => (
                          <span key={t} className="pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Big, centered image */}
                    {s.img ? (
                      <div className="pointer-events-none absolute inset-0 z-[1] grid place-items-center p-2">
                        <img
                          src={s.img}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          draggable={false}
                          className="h-full w-full select-none object-contain [filter:drop-shadow(0_10px_24px_rgba(0,0,0,.5))]"
                        />
                      </div>
                    ) : null}

                    {/* Accent glow behind */}
                    <motion.div
                      className="absolute -right-5 -bottom-2 z-0 h-40 w-40 blur-[12px]"
                      style={{
                        background: `radial-gradient(circle, ${s.accent}33 0%, transparent 60%)`,
                      }}
                      animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Override shell size responsively for better mobile/desktop behavior */}
      <style jsx global>{`
        /* Make the device larger on mobile and scale sensibly up the breakpoints */
        .phone-shell {
          width: min(92vw, 380px);
          height: min(165vw, 720px);
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 480px) {
          .phone-shell {
            width: min(88vw, 400px);
            height: min(150vw, 720px);
          }
        }
        @media (min-width: 768px) {
          .phone-shell {
            width: min(60vw, 420px);
            height: min(100vw, 700px);
          }
        }
        @media (min-width: 1024px) {
          .phone-shell {
            width: clamp(300px, 32vw, 360px);
            height: clamp(560px, 60vw, 640px);
          }
        }
      `}</style>
    </div>
  );
}