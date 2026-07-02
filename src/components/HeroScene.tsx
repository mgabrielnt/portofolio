"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  { left: 36, align: "left" as const, lines: ["An AI/Data developer and", "delivery partner for modern systems."] },
  { left: 50, align: "center" as const, lines: ["I coordinate complete builds", "from data to dashboard launch."] },
  { left: 64, align: "right" as const, lines: ["Delivery built for career growth", "and polished digital presence."] },
];

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

export function HeroScene() {
  const [progress, setProgress] = useState(0);
  const target = useRef(0);

  useEffect(() => {
    let frame = 0;
    const render = () => {
      setProgress((value) => value + (target.current - value) * 0.09);
      frame = requestAnimationFrame(render);
    };
    const sync = () => { target.current = clamp(window.scrollY / 1050); };
    const wheel = (event: WheelEvent) => {
      const node = event.target as Element | null;
      if (node?.closest("#projects")) return;
      target.current = clamp(target.current + event.deltaY * 0.00055);
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
    <section className="pointer-events-none absolute inset-0 z-0">
      {scenes.map((scene, index) => {
        const center = index / (scenes.length - 1);
        const distance = Math.abs(progress - center) * 2;
        const opacity = clamp(1 - distance * 1.45);
        const y = (progress - center) * -42;
        return (
          <div
            key={scene.left}
            className="absolute top-[61%] max-w-[660px] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${scene.left}%`, textAlign: scene.align, opacity, transform: `translate(-50%, calc(-50% + ${y}px))` }}
          >
            <h1 className="text-[34px] font-black leading-[1.02] tracking-[-0.066em] md:text-[clamp(40px,3.2vw,62px)]">
              {scene.lines.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
            <p className="mt-5 text-sm font-bold leading-tight text-muted">
              Forecasting, automation, dashboard systems, and deploy-ready products.
            </p>
          </div>
        );
      })}
    </section>
  );
}
