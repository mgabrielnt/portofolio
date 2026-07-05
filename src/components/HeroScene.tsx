"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    x: "24px",
    shift: "0",
    copy: "I build intelligent data systems and launch-ready web portfolios for AI, data, and web roles.",
  },
  {
    x: "50%",
    shift: "-50%",
    copy: "I coordinate complete builds from data to dashboard launch with clean delivery structure.",
  },
  {
    x: "calc(100% - 24px)",
    shift: "-100%",
    copy: "I’m based in Indonesia, building global-ready digital products. I design forecasting systems, dashboard products, and web experiences.",
  },
];

function clamp(value: number) { return Math.max(0, Math.min(1, value)); }

export function HeroScene() {
  const [progress, setProgress] = useState(0);
  const target = useRef(0);

  useEffect(() => {
    let frame = 0;
    const render = () => {
      setProgress((value) => value + (target.current - value) * 0.12);
      frame = requestAnimationFrame(render);
    };
    const wheel = (event: WheelEvent) => {
      const node = event.target as Element | null;
      if (node?.closest("#projects")) return;
      target.current = clamp(target.current + event.deltaY * 0.0011);
    };
    frame = requestAnimationFrame(render);
    window.addEventListener("wheel", wheel, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("wheel", wheel); };
  }, []);

  return (
    <section
      className="pointer-events-none absolute left-0 right-0 z-0"
      style={{ bottom: "clamp(20px, 4vh, 60px)", height: "clamp(132px, 18vh, 170px)" }}
    >
      {scenes.map((scene, index) => {
        const center = index / (scenes.length - 1);
        const opacity = clamp(1 - Math.abs(progress - center) * 3.2);
        const y = (progress - center) * -12;
        return (
          <div
            key={scene.x}
            className="absolute top-0 flex h-full items-center text-left"
            style={{ left: scene.x, width: "min(660px, calc(100vw - 48px))", opacity, transform: `translate(${scene.shift}, ${y}px)` }}
          >
            <h1 style={{ fontSize: "clamp(24px, min(2.05vw, 4vh), 38px)", lineHeight: 1.18, letterSpacing: "-0.045em" }} className="hero-center-font font-black">
              {scene.copy}
            </h1>
          </div>
        );
      })}
    </section>
  );
}
