"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [point, setPoint] = useState({ x: -80, y: -80 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/10 md:block"
      style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }}
    />
  );
}
