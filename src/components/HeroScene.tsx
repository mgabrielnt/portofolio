"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  ["I build intelligent data systems", "and launch-ready web portfolios.", "A trusted AI/Data partner for", "career-focused digital systems."],
  ["I coordinate complete builds", "from data to dashboard launch.", "Delivery built for polish", "and measurable career growth."],
  ["Rooted in Indonesia", "building global-ready portfolios", "for AI, data, dashboard", "and web engineering roles."],
];

function clamp(value: number) { return Math.max(0, Math.min(1, value)); }

export function HeroScene() {
  const [progress, setProgress] = useState(0);
  const target = useRef(0);

  useEffect(() => {
    let frame = 0;
    const render = () => {
      setProgress((value) => value + (target.current - value) * 0.08);
      frame = requestAnimationFrame(render);
    };
    const sync = () => { target.current = clamp(window.scrollY / 900); };
    sync();
    frame = requestAnimationFrame(render);
    window.addEventListener("scroll", sync, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", sync); };
  }, []);

  return (
    <section className="relative z-0 mt-16 h-[220px] max-w-[640px] md:mt-14">
      {scenes.map((lines, index) => {
        const center = index / (scenes.length - 1);
        const distance = Math.abs(progress - center) * 2;
        const opacity = clamp(1 - distance * 1.55);
        const y = (progress - center) * -30;
        return (
          <div key={lines[0]} className="absolute left-0 top-0" style={{ opacity, transform: `translateY(${y}px)` }}>
            <h1 className="text-[34px] font-black leading-[1.06] tracking-[-0.055em] md:text-[42px]">
              {lines.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
          </div>
        );
      })}
    </section>
  );
}
