"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  ["I build intelligent data systems", "and launch-ready web portfolios.", "Built for data, AI,", "and web engineering work."],
  ["I coordinate complete builds", "from data to dashboard launch.", "Delivery built for polish", "and measurable growth."],
  ["Rooted in Indonesia", "building global-ready portfolios", "for AI, data, dashboard", "and web engineering roles."],
];

function clamp(value: number) { return Math.max(0, Math.min(1, value)); }

export function HeroScene() {
  const [progress, setProgress] = useState(0);
  const target = useRef(0);

  useEffect(() => {
    let frame = 0;
    const render = () => {
      setProgress((value) => value + (target.current - value) * 0.1);
      frame = requestAnimationFrame(render);
    };
    const sync = () => { target.current = clamp(window.scrollY / 800); };
    const wheel = (event: WheelEvent) => {
      const node = event.target as Element | null;
      if (node?.closest("#projects")) return;
      target.current = clamp(target.current + event.deltaY * 0.00075);
    };
    sync();
    frame = requestAnimationFrame(render);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("wheel", wheel, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("wheel", wheel);
    };
  }, []);

  return (
    <section className="relative z-0 mt-10 h-[170px] max-w-[560px] md:mt-10">
      {scenes.map((lines, index) => {
        const center = index / (scenes.length - 1);
        const distance = Math.abs(progress - center) * 2;
        const opacity = clamp(1 - distance * 1.65);
        const y = (progress - center) * -24;
        return (
          <div key={lines[0]} className="absolute left-0 top-0" style={{ opacity, transform: `translateY(${y}px)` }}>
            <h1 className="text-[28px] font-black leading-[1.06] tracking-[-0.05em] md:text-[34px] xl:text-[38px]">
              {lines.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
          </div>
        );
      })}
    </section>
  );
}
