"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  { x: "24px", t: "translateY", align: "left" as const, lines: ["I build intelligent data systems", "and launch-ready web portfolios.", "A trusted AI/Data partner for", "career-focused digital systems."] },
  { x: "50%", t: "translateX", align: "center" as const, lines: ["I coordinate complete builds", "from data to dashboard launch.", "Delivery built for polish", "and measurable career growth."] },
  { x: "calc(100% - 24px)", t: "translateEnd", align: "right" as const, lines: ["Rooted in Indonesia", "building global-ready portfolios", "for AI, data, dashboard", "and web engineering roles."] },
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
    const sync = () => { target.current = clamp(window.scrollY / 1100); };
    sync();
    frame = requestAnimationFrame(render);
    window.addEventListener("scroll", sync, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", sync); };
  }, []);

  return (
    <section className="pointer-events-none absolute inset-0 z-0">
      {scenes.map((scene, index) => {
        const center = index / (scenes.length - 1);
        const distance = Math.abs(progress - center) * 2;
        const opacity = clamp(1 - distance * 1.55);
        const y = (progress - center) * -34;
        const base = scene.t === "translateX" ? "translate(-50%," : scene.t === "translateEnd" ? "translate(-100%," : "translate(0,";
        return (
          <div
            key={scene.x}
            className="absolute top-[56%] max-w-[620px]"
            style={{ left: scene.x, textAlign: scene.align, opacity, transform: `${base} calc(-50% + ${y}px))` }}
          >
            <h1 className="text-[34px] font-black leading-[1.1] tracking-[-0.052em] md:text-[clamp(34px,2.55vw,48px)]">
              {scene.lines.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
          </div>
        );
      })}
    </section>
  );
}
