"use client";

import { useState } from "react";
import { awards, projects } from "@/data/projects";
import { InfiniteRail } from "./InfiniteRail";

type Tab = "projects" | "awards";

export function WorkShowcase() {
  const [tab, setTab] = useState<Tab>("projects");
  const items = tab === "projects" ? projects : awards;

  return (
    <section id="projects" className="relative -mt-24 pb-6 md:-mt-28">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full border border-line bg-ink/70 p-1 text-[11px] font-black backdrop-blur">
          <button
            onClick={() => setTab("projects")}
            className={tab === "projects" ? "rounded-full bg-white/15 px-5 py-3" : "rounded-full px-5 py-3 text-muted"}
          >
            Projects <sup>1</sup>
          </button>
          <button
            onClick={() => setTab("awards")}
            className={tab === "awards" ? "rounded-full bg-white/15 px-5 py-3" : "rounded-full px-5 py-3 text-muted"}
          >
            Awards <sup>2</sup>
          </button>
        </div>
      </div>
      <InfiniteRail items={items} />
    </section>
  );
}
