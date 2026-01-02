// components/case-study/Quote.tsx
"use client";
import FadeIn from "../ui/FadeIn";
import type { CaseQuote } from "../data/caseStudies";

export default function Quote({ quote }: { quote: CaseQuote }) {
  return (
    <section className="section">
      <div className="container center">
        <FadeIn>
          <figure className="gradient-wrap" style={{ width: "100%", maxWidth: 760 }}>
            <blockquote className="gradient-inner" style={{ padding: 20, fontSize: "clamp(16px,2.6vw,18px)", fontStyle: "italic" }}>
              “{quote.text}”
              <figcaption style={{ marginTop: 10, fontStyle: "normal", color: "rgba(255,255,255,.8)" }}>
                — {quote.author}{quote.title ? `, ${quote.title}` : ""}
              </figcaption>
            </blockquote>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}