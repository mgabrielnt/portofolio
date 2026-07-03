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
    <section className="relative z-0 mt-12 h-[190px] max-w-[620px] md:mt-12">
      {scenes.map((lines, index) => {
        const center = index / (scenes.length - 1);
        const distance = Math.abs(progress - center) * 2;
        const opacity = clamp(1 - distance * 1.55);
        const y = (progress - center) * -28;
        return (
          <div key={lines[0]} className="absolute left-0 top-0" style={{ opacity, transform: `translateY(${y}px)` }}>
            <h1 className="text-[32px] font-black leading-[1.04] tracking-[-0.052em] md:text-[38px]">
              {lines.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
          </div>
        );
      })}
    </section>
  );
}
