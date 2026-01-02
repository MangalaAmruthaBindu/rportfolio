// // components/Navbar.tsx
// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // sticky shadow when scrolling
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // lock scroll when mobile drawer open
//   useEffect(() => {
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [open]);

//   const close = () => setOpen(false);

//   return (
//     <header
//       className="nav-blur"
//       style={{
//         position: "sticky",
//         top: 0,
//         zIndex: 50,
//         boxShadow: scrolled ? "0 6px 30px rgba(127,0,255,0.15)" : "none",
//       }}
//     >
//       <nav
//         className="container"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "12px 0",
//         }}
//       >
//         {/* Brand */}
//         <a href="/" className="title-gradient" style={{ fontWeight: 900, fontSize: 18 }}>
//           MAB
//         </a>

//         {/* Desktop links */}
//         <div className="nav-links">
//           <a href="#services" className="nav-link">Services</a>
//           <a href="#projects" className="nav-link">Projects</a>
//           <a href="#contact" className="nav-link">Contact</a>
//           <a
//             href="#contact"
//             className="btn-desktop"
//             style={{
//               padding: "8px 12px",
//               borderRadius: 10,
//               background: "linear-gradient(90deg,#7F00FF,#E100FF)",
//             }}
//           >
//             Hire me
//           </a>
//         </div>

//         {/* Mobile burger (no inline display here) */}
//         <button
//           aria-label="Open menu"
//           onClick={() => setOpen(true)}
//           className="nav-burger"
//           style={{
//             border: "1px solid rgba(255,255,255,0.18)",
//             borderRadius: 10,
//             padding: "8px 10px",
//             background: "transparent",
//             color: "white",
//           }}
//         >
//           ☰
//         </button>
//       </nav>

//       {/* Mobile drawer */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               key="backdrop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               onClick={close}
//               style={{
//                 position: "fixed",
//                 inset: 0,
//                 background: "#000",
//                 zIndex: 60,
//               }}
//             />

//             {/* Drawer */}
//             <motion.aside
//               key="drawer"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.25 }}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 right: 0,
//                 height: "100vh",
//                 width: "80vw",
//                 maxWidth: 360,
//                 zIndex: 70,
//                 background:
//                   "radial-gradient(600px 240px at 100% 0, rgba(127,0,255,0.25), transparent 60%), rgba(10,0,20,0.9)",
//                 borderLeft: "1px solid rgba(255,255,255,0.12)",
//                 backdropFilter: "blur(10px)",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <div
//                 className="container"
//                 style={{
//                   padding: "14px 16px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div className="title-gradient" style={{ fontWeight: 900 }}>
//                   MAB
//                 </div>
//                 <button
//                   aria-label="Close menu"
//                   onClick={close}
//                   style={{
//                     border: "1px solid rgba(255,255,255,0.18)",
//                     borderRadius: 10,
//                     padding: "8px 10px",
//                     background: "transparent",
//                     color: "white",
//                   }}
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div style={{ padding: 16, display: "grid", gap: 10 }}>
//                 <a href="#services" onClick={close} className="drawer-link">Services</a>
//                 <a href="#projects" onClick={close} className="drawer-link">Projects</a>
//                 <a href="#contact" onClick={close} className="drawer-link">Contact</a>
//                 <a
//                   href="#contact"
//                   onClick={close}
//                   style={{
//                     marginTop: 8,
//                     padding: "10px 12px",
//                     borderRadius: 10,
//                     background: "linear-gradient(90deg,#7F00FF,#E100FF)",
//                     color: "white",
//                     fontWeight: 800,
//                     textAlign: "center",
//                   }}
//                 >
//                   Hire me
//                 </a>
//               </div>

//               <div style={{ marginTop: "auto", padding: 16, color: "rgba(255,255,255,.6)", fontSize: 12 }}>
//                 © {new Date().getFullYear()} Mangala AmruthaBindu
//               </div>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Component-scoped responsive CSS */}
//       <style jsx>{`
//         /* Mobile default: show burger, hide desktop links */
//         .nav-links { display: none; gap: 18px; align-items: center; }
//         .nav-link { color: rgba(255, 255, 255, 0.85); }
//         .btn-desktop { color: white; font-weight: 800; }
//         .nav-burger { display: inline-flex; }

//         /* Desktop >= 900px: show links, hide burger */
//         @media (min-width: 900px) {
//           .nav-links { display: flex; }
//           .nav-burger { display: none; }
//         }

//         /* Drawer link styles */
//         .drawer-link {
//           padding: 10px 12px;
//           border: 1px solid rgba(255, 255, 255, 0.12);
//           border-radius: 10px;
//           color: rgba(255, 255, 255, 0.9);
//           background: rgba(255, 255, 255, 0.05);
//         }
//         .drawer-link:hover { background: rgba(255, 255, 255, 0.1); }
//       `}</style>
//     </header>
//   );
// }

// components/Navbar.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // sticky shadow when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when mobile drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 backdrop-blur-md border-b border-white/10",
        "bg-[rgba(10,0,20,0.35)]",
        scrolled ? "shadow-[0_6px_30px_rgba(127,0,255,0.15)]" : "shadow-none",
      ].join(" ")}
    >
      {/* Slim fixed height: 48px mobile, 56px desktop */}
      <nav className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-4 h-12 md:h-14">
        {/* Brand */}
        <a href="/" className="title-gradient font-black text-[16px] md:text-[18px] leading-none">
          MAB
        </a>

        {/* Desktop links (>= 900px) */}
        <div className="hidden min-[900px]:flex items-center gap-[18px]">
          <a href="#services" className="text-sm md:text-[15px] text-white/85 hover:text-white transition-colors leading-none py-0">
            Services
          </a>
          <a href="#projects" className="text-sm md:text-[15px] text-white/85 hover:text-white transition-colors leading-none py-0">
            Projects
          </a>
          <a href="#contact" className="text-sm md:text-[15px] text-white/85 hover:text-white transition-colors leading-none py-0">
            Contact
          </a>
          <a
            href="#contact"
            className="
              inline-flex items-center rounded-[10px]
              bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]
              px-3 py-1.5 text-sm font-extrabold text-white leading-none
              shadow-[0_8px_22px_rgba(127,0,255,0.22)]
              transition-transform hover:scale-[1.02] focus:outline-none
              focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black
            "
          >
            Hire me
          </a>
        </div>

        {/* Mobile burger (< 900px) */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="
            inline-flex min-[900px]:hidden items-center rounded-[10px]
            border border-white/20 px-2.5 py-1.5 text-white leading-none
            hover:bg-white/5 focus:outline-none
            focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black
          "
        >
          ☰
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 h-500 bg-black"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="
                absolute right-0 top-0 z-[70] h-screen w-[80vw] max-w-[360px]
                border-l border-white/10
                bg-[radial-gradient(600px_240px_at_100%_0,rgba(125, 10, 240, 0.25),transparent_60%),rgba(10,0,20,0.9)]
                backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                flex flex-col
              "
            >
              {/* Drawer header */}
              <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-4 py-3">
                <div className="title-gradient font-black leading-none">MAB</div>
                <button
                  aria-label="Close menu"
                  onClick={close}
                  className="
                    inline-flex items-center rounded-[10px] border border-white/20
                    px-2.5 py-1.5 text-white leading-none hover:bg-white/5 focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  "
                >
                  ✕
                </button>
              </div>

              {/* Drawer links */}
              <div className="grid gap-2.5 p-4">
                <a
                  href="#services"
                  onClick={close}
                  className="rounded-[10px] border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  onClick={close}
                  className="rounded-[10px] border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={close}
                  className="rounded-[10px] border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
                >
                  Contact
                </a>
                <a
                  href="#contact"
                  onClick={close}
                  className="
                    mt-1.5 inline-flex items-center justify-center rounded-[10px]
                    bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]
                    px-3 py-2 text-sm font-extrabold text-white
                    shadow-[0_8px_22px_rgba(127,0,255,0.22)]
                    transition-transform hover:scale-[1.02]
                  "
                >
                  Hire me
                </a>
              </div>

              {/* Drawer footer */}
              <div className="mt-auto px-4 pb-3 pt-1 text-[11px] text-white/60">
                © {new Date().getFullYear()} Mangala AmruthaBindu
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}