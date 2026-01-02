// components/ui/StaggerWords.tsx
"use client";
import { motion } from "framer-motion";

export default function StaggerWords({ text, className = "title-gradient" }:{
  text: string; className?: string;
}) {
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      style={{ fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.05 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          style={{ display: "inline-block", marginRight: 10 }}
          variants={{
            hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
          }}
        >
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}