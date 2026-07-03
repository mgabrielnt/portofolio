"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  { x: "24px", shift: "0", align: "left" as const, lines: ["I build intelligent data systems", "and launch-ready web portfolios.", "for AI, data, and web roles."] },
  { x: "50%", shift: "-50%", align: "center" as const, lines: ["I coordinate complete builds", "from data to dashboard launch.", "with clean delivery structure."] },
  { x: "calc(100% - 24px)", shift: "-100%", align: "right" as const, lines: ["I build career-ready AI systems", "with polished dashboard delivery.", "and global-ready web presence."] },
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
      style={{ bottom: "clamp(52px, 7.4vh, 86px)", height: "clamp(124px, 17vh, 158px)" }}
    >
      {scenes.map((scene, index) => {
        const center = index / (scenes.length - 1);
        const opacity = clamp(1 - Math.abs(progress - center) * 3.2);
        const y = (progress - center) * -14;
        return (
          <div
            key={scene.x}
            className="absolute top-0 flex h-full items-center"
            style={{ left: scene.x, maxWidth: "min(560px, calc(100vw - 48px))", textAlign: scene.align, opacity, transform: `translate(${scene.shift}, ${y}px)` }}
          >
            <h1 style={{ fontSize: "clamp(24px, min(2.2vw, 4.3vh), 36px)", lineHeight: 1.08, letterSpacing: "-0.052em" }} className="font-black">
              {scene.lines.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
          </div>
        );
      })}
    </section>
  );
}
