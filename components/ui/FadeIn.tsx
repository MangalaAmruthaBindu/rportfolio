// components/ui/FadeIn.tsx
"use client";
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, y = 16 }:{
  children: React.ReactNode; delay?: number; y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}