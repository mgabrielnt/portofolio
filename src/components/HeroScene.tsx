"use client";

import { useEffect, useMemo, useState } from "react";

const scenes = [
  { left: "37%", align: "left" as const, lines: ["An AI/Data developer and", "delivery partner for modern systems."] },
  { left: "50%", align: "center" as const, lines: ["I coordinate end-to-end builds", "from data to dashboard launch."] },
  { left: "63%", align: "right" as const, lines: ["Delivery built for career growth", "and polished digital presence."] },
];

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

export function HeroScene() {
  const [progress, setProgress] = useState(0);
  const active = useMemo(() => Math.round(progress * 2), [progress]);

  useEffect(() => {
    const syncScroll = () => setProgress((value) => Math.max(value, clamp(window.scrollY / 900)));
    const syncWheel = (event: WheelEvent) => setProgress((value) => clamp(value + event.deltaY * 0.0009));
    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    window.addEventListener("wheel", syncWheel, { passive: true });
    return () => {
      window.removeEventListener("scroll", syncScroll);
      window.removeEventListener("wheel", syncWheel);
    };
  }, []);

  return (
    <section className="pointer-events-none absolute inset-0 z-0">
      {scenes.map((scene, index) => (
        <div
          key={scene.left}
          className="absolute top-[60%] max-w-[570px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
          style={{ left: scene.left, textAlign: scene.align, opacity: active === index ? 1 : 0 }}
        >
          <h1 className="text-[34px] font-black leading-[0.96] tracking-[-0.075em] md:text-[clamp(40px,3.05vw,58px)]">
            {scene.lines.map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
          <p className="mt-4 text-sm font-bold leading-tight text-muted">
            Forecasting, automation, dashboard systems, and deploy-ready products.
          </p>
        </div>
      ))}
    </section>
  );
}
