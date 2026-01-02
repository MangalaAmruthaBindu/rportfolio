// app/work/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudyBySlug } from "../../../components/data/caseStudies";
import CaseHero from "../../../components/case-study/CaseHero";
import MetaGrid from "../../../components/case-study/MetaGrid";
import Gallery from "../../../components/case-study/Gallery";
import Quote from "../../../components/case-study/Quote";
import Contact from "../../../components/Contact";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Case Study" };

  const title = `${cs.title} – Case Study`;
  const description = cs.summary;
  const url = `https://yourdomain.com/work/${cs.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: cs.ogImage ? [{ url: cs.ogImage, width: 1200, height: 630, alt: cs.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: cs.ogImage ? [cs.ogImage] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <main>
      <CaseHero cs={cs} />

      <section className="section">
        <div className="container">
          <MetaGrid cs={cs} />
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2" style={{ rowGap: 22 }}>
          <div className="gradient-wrap">
            <div className="gradient-inner" style={{ padding: 18 }}>
              <h2 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800 }}>Problem</h2>
              <p style={{ color: "var(--muted)", marginTop: 8 }}>{cs.problem}</p>
            </div>
          </div>

          <div className="gradient-wrap">
            <div className="gradient-inner" style={{ padding: 18 }}>
              <h2 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800 }}>Solution</h2>
              <p style={{ color: "var(--muted)", marginTop: 8 }}>{cs.solution}</p>
              {cs.features?.length ? (
                <ul style={{ marginTop: 12, color: "rgba(255,255,255,.9)", columns: 1 }}>
                  {cs.features.map((f) => (
                    <li key={f} style={{ marginBottom: 6 }}>• {f}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {cs.metrics?.length ? (
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 12 }}>
              {cs.metrics.map((m) => (
                <div key={m.label} className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ color: "var(--muted)" }}>{m.label}</div>
                  <div style={{ fontWeight: 900, fontSize: 20,overflowWrap: 'break-word' }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Gallery cs={cs} />

      {cs.quote ? <Quote quote={cs.quote} /> : null}


      <Contact />
      <div className="center" style={{ padding: "24px 0", color: "var(--muted)" }}>
        © {new Date().getFullYear()} Mangala AmruthaBindu
      </div>
    </main>
  );
}