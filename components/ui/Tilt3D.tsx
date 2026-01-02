// components/ui/Tilt3D.tsx
"use client";
import { ReactNode, useState } from "react";

export default function Tilt3D({ children, max = 10, className = "" }:{
  children: ReactNode; max?: number; className?: string;
}) {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rotateX = (py * max * -1).toFixed(2);
    const rotateY = (px * max).toFixed(2);
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }
  function onLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  }

  return (
    <div
      className={className}
      style={{ transform: transform, transformStyle: "preserve-3d", transition: "transform .2s ease" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}