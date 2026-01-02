// components/case-study/CaseHero.tsx
"use client";
import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import type { CaseStudy } from "../data/caseStudies";

export default function CaseHero({ cs }: { cs: CaseStudy }) {
  const videoSrc = cs.heroVideo ?? "/videos/app-screenshare.mp4";
  const poster = cs.heroPoster; // optional

  // Fallback aspect ratio until metadata loads (or set per-case via cs.heroAspect: "9/16" | "16/9")
  const defaultAspect = cs.heroAspect ?? "16/9";
  const [aspect, setAspect] = useState<string>(defaultAspect);

  function onLoadedMeta(e: React.SyntheticEvent<HTMLVideoElement>) {
    const v = e.currentTarget;
    if (v.videoWidth && v.videoHeight) {
      setAspect(`${v.videoWidth}/${v.videoHeight}`);
    }
  }

  return (
    <section className="relative py-16 min-[900px]:py-20">
      {/* Ambient backgrounds from your globals */}
      <div className="bg-aurora" />
      <div className="bg-grid" />
      <div className="bg-noise" />

      {/* Container (matches your 1100px site width) */}
      <div className="mx-auto w-full max-w-[1100px] px-4">
        {/* Mobile: 1 col, Desktop (≥900px): 2 cols */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 items-center gap-7 min-[900px]:gap-10">
          {/* Left: title, summary, ctas, tags */}
          <div>
            <FadeIn>
              <h1 className="title-gradient text-[clamp(30px,6vw,56px)] font-black wrap-break-word leading-[1.05]">
                {cs.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-3 max-w-[720px] text-[color:var(--muted)]">
                {cs.summary}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-4 flex flex-wrap gap-3">
                {cs.links?.website && (
                  <a
                    className="btn btn-accent"
                    href={cs.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit product
                  </a>
                )}
                {cs.links?.appStore && (
                  <a
                    className="btn btn-outline"
                    href={cs.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Store
                  </a>
                )}
                {cs.links?.playStore && (
                  <a
                    className="btn btn-outline"
                    href={cs.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play
                  </a>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.tags.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: responsive video container (adapts to actual video aspect) */}
          <FadeIn delay={0.15} y={24}>
            <div
              className="
                relative w-full overflow-hidden rounded-2xl
                bg-white/5 backdrop-blur-md
                min-h-[220px] min-[900px]:min-h-[320px]
              "
              style={{
                aspectRatio: aspect, // becomes accurate after metadata loads
                background: cs.color ?? "var(--surface-2)",
              }}
              aria-label={`${cs.title} hero video`}
            >
              <video
                src={videoSrc}
                poster={poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedMetadata={onLoadedMeta}
                className="block h-full w-full"
                style={{
                  objectFit: "contain", // no cropping; show full frame
                  backgroundColor: "black", // letterbox fill if aspect differs
                }}
              />

              {/* Subtle glow behind content */}
              <div
                className="
                  pointer-events-none absolute -right-5 -bottom-3 h-[220px] w-[220px]
                  blur-[12px]
                "
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 60%)",
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}