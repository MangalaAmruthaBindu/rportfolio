// components/case-study/MetaGrid.tsx
"use client";
import FadeIn from "../ui/FadeIn";
import type { CaseStudy } from "../data/caseStudies";

export default function MetaGrid({ cs }: { cs: CaseStudy }) {
  return (
    <div className="grid grid-2" style={{ gap: 12 }}>
      <FadeIn>
        <div className="card">
          <div style={{ fontWeight: 800, marginBottom: 6 }}>Role</div>
          <div style={{ color: "var(--muted)" }}>{cs.meta.role}</div>
        </div>
      </FadeIn>
      <FadeIn delay={0.06}>
        <div className="card">
          <div style={{ fontWeight: 800, marginBottom: 6 }}>Timeline</div>
          <div style={{ color: "var(--muted)" }}>{cs.meta.timeline}</div>
        </div>
      </FadeIn>
      {cs.meta.company ? (
        <FadeIn delay={0.12}>
          <div className="card">
            <div style={{ fontWeight: 800, marginBottom: 6 }}>Company</div>
            <div style={{ color: "var(--muted)" }}>{cs.meta.company}</div>
          </div>
        </FadeIn>
      ) : null}
      {cs.meta.team ? (
        <FadeIn delay={0.18}>
          <div className="card">
            <div style={{ fontWeight: 800, marginBottom: 6 }}>Team</div>
            <div style={{ color: "var(--muted)" }}>{cs.meta.team}</div>
          </div>
        </FadeIn>
      ) : null}
      {cs.tech?.length ? (
        <FadeIn delay={0.24}>
          <div className="card">
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Tech</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {cs.tech.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      ) : null}
    </div>
  );
}