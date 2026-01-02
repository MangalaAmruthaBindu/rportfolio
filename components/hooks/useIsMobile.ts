// components/hooks/useIsMobile.ts
"use client";
import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 900) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width:${breakpoint}px)`);
    const coarse = window.matchMedia("(pointer: coarse)");
    const set = () => setMobile(mql.matches || coarse.matches);
    set();
    mql.addEventListener?.("change", set);
    return () => mql.removeEventListener?.("change", set);
  }, [breakpoint]);
  return mobile;
}