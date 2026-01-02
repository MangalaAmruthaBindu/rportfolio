// app/page.tsx
"use client";

import useIsMobile from "../components/hooks/useIsMobile";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import FeaturedProjectsDesktop from "../components/featured/FeaturedProjectsDesktop";
import FeaturedProjectsMobile from "../components/featured/FeaturedProjectsMobile";

export default function Page() {
  const isMobile = useIsMobile(900);

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      {isMobile ? <FeaturedProjectsMobile /> : <FeaturedProjectsDesktop />}
      <Contact />
      <div className="center" style={{ padding: "24px 0", color: "var(--muted)" }}>
        © {new Date().getFullYear()} Mangala AmruthaBindu
      </div>
    </main>
  );
}