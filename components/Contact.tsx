// components/Contact.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

const EMAIL = "mamruthabindu6@gmail.com"; // <-- change to yours
const SUBJECT = "Project inquiry — React Native app";
const BODY = [
  "Hi Mangala,",
  "",
  "I'm interested in working together on a React Native project.",
  "",
  "• Company:",
  "• Scope / Features:",
  "• Budget range:",
  "• Target launch:",
  "",
  "Thanks!",
].join("\n");

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export default function Contact() {
  function handleEmailClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Try default mail client first
    const fallbackTimer = setTimeout(() => {
      // If mail app didn't take focus, open Gmail as a fallback
      if (document.visibilityState === "visible") {
        window.open(GMAIL, "_blank", "noopener,noreferrer");
      }
    }, 800);

    // Navigate to mailto (this should hand off to the OS/mail app)
    window.location.href = MAILTO;

    // If we leave the page (mail app took over), cancel the fallback
    const clear = () => clearTimeout(fallbackTimer);
    window.addEventListener("pagehide", clear, { once: true });
    window.addEventListener("blur", clear, { once: true });
  }

  return (
    <section className="section" id="contact">
      <div className="container center">
        <motion.div
          className="gradient-wrap"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: 760 }}
        >
          <div className="gradient-inner" style={{ padding: 18 }}>
            <div
              className="title-gradient"
              style={{ fontWeight: 900, fontSize: "clamp(22px,3.6vw,32px)" }}
            >
              Let’s build your mobile app
            </div>
            <div style={{ color: "rgba(255,255,255,.8)", marginTop: 6 }}>
              Open to freelance React Native projects, full app builds, and feature work.
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 12,
                justifyContent: "center",
              }}
            >
              {/* Email with prefilled subject + message; Gmail fallback if mail app not configured */}
              <a className="btn btn-accent" href={MAILTO} onClick={handleEmailClick}>
                Email me
              </a>

              {/* Optional: direct Gmail button in case user prefers it */}
              <a
                className="btn btn-outline"
                href={GMAIL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compose email in Gmail"
              >
                Use Gmail
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}