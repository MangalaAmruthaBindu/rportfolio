// components/Services.tsx
"use client";
import FadeIn from "./ui/FadeIn";
import type { SVGProps } from "react";

type Service = {
  h: string;
  p: string;
  bullets?: string[];
  icon: IconKey;
};

const Icons = {
  dev: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M8 7l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ui: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="12" width="10" height="8" rx="1.5" />
      <path d="M16 12h5M16 16h5M16 20h5" strokeLinecap="round" />
    </svg>
  ),
  offline: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M7 12a5 5 0 0 1 10 0" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  ),
  perf: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 3v5M21 12h-5M12 21v-5M3 12h5" strokeLinecap="round" />
      <path d="M8 8l8 8" />
    </svg>
  ),
  native: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" strokeLinecap="round" />
    </svg>
  ),
  cicd: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M4 7h10v10H4z" />
      <path d="M14 12h6M17 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
} as const;

type IconKey = keyof typeof Icons;

const items: Service[] = [
  {
    h: "End‑to‑end App Development",
    p: "From spec to App Store & Play Store with Expo or RN CLI.",
    bullets: ["Clean architecture", "iOS + Android from one codebase", "Store submission"],
    icon: "dev",
  },
  {
    h: "UI/UX & Micro‑interactions",
    p: "Polished, accessible UI with native‑feel motion.",
    bullets: ["Reanimated, Framer Motion", "Gestures, springs, parallax"],
    icon: "ui",
  },
  {
    h: "Offline‑first Data & Sync",
    p: "Reliable data layers with caching and conflict‑free sync.",
    bullets: ["React Query, SQLite/MMKV", "Optimistic UI, background refresh"],
    icon: "offline",
  },
  {
    h: "Performance & Scalability",
    p: "Snappy apps that sustain 60fps on real devices.",
    bullets: ["Profiling (CPU, memory, FPS)", "Startup and bundle size cuts"],
    icon: "perf",
  },
  {
    h: "Native Integrations & SDKs",
    p: "Integrations your product needs—done right.",
    bullets: ["Push, auth, analytics", "Payments, maps, camera, media"],
    icon: "native",
  },
  {
    h: "CI/CD, Testing & Release",
    p: "Confidence from commit to store.",
    bullets: ["EAS builds, OTA updates", "Jest/RTL/Detox, TestFlight/Play"],
    icon: "cicd",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto w-full max-w-7xl px-4">
        <FadeIn>
          <div>
            <h2 className="text-[clamp(22px,3.2vw,28px)] font-extrabold tracking-tight">Services</h2>
            <div className="mt-2 h-[3px] w-14 rounded-full bg-[var(--accent)]/70" />
          </div>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((it, i) => {
            const Icon = Icons[it.icon]; // pick component BEFORE JSX
            return (
              <FadeIn key={it.h} delay={0.06 * i}>
                <article
                  className="
                    group relative overflow-hidden rounded-xl border border-white/10
                    bg-white/5 p-6 backdrop-blur-md transition-all duration-300
                    hover:-translate-y-0.5 hover:bg-white/[0.07]
                    focus-within:-translate-y-0.5
                  "
                >
                  {/* Top accent bar */}
                  <span
                    className="pointer-events-none absolute left-0 top-0 h-[3px] w-10 bg-[var(--accent)]/80 transition-all duration-500 group-hover:w-full"
                  />

                  {/* Subtle shine */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-1/2 -top-1/2 h-[200%] w-[60%] rotate-12
                               bg-gradient-to-b from-white/5 to-transparent opacity-0 blur-md
                               transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Title row */}
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10
                                 bg-white/[0.06] text-[var(--accent)]
                                 transition-transform duration-300 group-hover:scale-105"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[clamp(16px,2.2vw,20px)] font-semibold tracking-tight">
                      {it.h}
                    </h3>
                  </div>

                  <p className="mt-2 text-white/80">{it.p}</p>

                  {it.bullets?.length ? (
                    <>
                      <div className="my-4 h-px w-full bg-white/10" />
                      <ul className="space-y-2">
                        {it.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-white/85
                                       transition-transform duration-300 group-hover:translate-x-[2px]"
                          >
                            <CheckIcon className="mt-[3px] h-4 w-4 text-[var(--accent)]/90" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.543-6.543a1 1 0 0 1 1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}