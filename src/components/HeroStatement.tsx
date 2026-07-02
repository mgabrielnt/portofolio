"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const copy = [
  ["I build end-to-end AI systems", "and launch-ready web portfolios."],
  ["I design clean dashboards", "for data, model, and product stories."],
  ["I ship fast web interfaces", "with research-ready structure."],
];

export function HeroStatement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => setIndex(Math.min(2, Math.floor(window.scrollY / 280)));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section
      className={cn(
        "mt-14 max-w-[690px] transition-all duration-500 md:absolute md:top-[53%] md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2",
        index === 0 && "md:left-[36%] md:text-left",
        index === 1 && "md:left-1/2 md:text-center",
        index === 2 && "md:left-[64%] md:text-right"
      )}
    >
      <span className="absolute -left-16 top-20 hidden size-2 rounded-full bg-accent md:block" />
      <h1 className="text-[44px] font-black leading-[0.92] tracking-[-0.085em] md:text-[clamp(54px,4.4vw,80px)]">
        {copy[index].map((line) => <span key={line} className="block">{line}</span>)}
      </h1>
      <p className="mt-4 text-sm font-bold leading-tight text-muted">
        Forecasting, automation, dashboard systems, and deploy-ready products.
      </p>
    </section>
  );
}
