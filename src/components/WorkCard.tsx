"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WorkCard({ item, active, onActive, onOpen }: {
  item: Project;
  active: boolean;
  onActive: (item: Project) => void;
  onOpen: (item: Project) => void;
}) {
  const light = item.theme === "light";
  const [missing, setMissing] = useState(false);

  return (
    <button
      data-work-card
      type="button"
      onClick={() => onOpen(item)}
      onMouseEnter={() => onActive(item)}
      onFocus={() => onActive(item)}
      className={cn(
        "relative block h-[155px] w-[280px] flex-none overflow-hidden rounded-md border p-3 text-left outline-none md:h-[168px] md:w-[300px]",
        light ? "border-black/10 bg-bone text-black" : "border-line bg-card text-paper",
        active && "ring-1 ring-white/40"
      )}
    >
      {!missing ? (
        <img
          src={item.media.image}
          alt={item.media.alt}
          onError={() => setMissing(true)}
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-white/5 px-5 text-center text-[9px] font-black uppercase tracking-[0.12em] text-white/45">
          Add {item.media.image}
        </div>
      )}
      <div className={cn("absolute inset-0", light ? "bg-white/60" : "bg-black/45")} />
      <p className={cn("relative text-[8px] font-black uppercase tracking-[0.2em]", light ? "text-black/45" : "text-white/55")}>
        {item.preview}
      </p>
      <div className="relative mt-16 md:mt-[72px]">
        <h2 className="text-[25px] font-black leading-[0.9] tracking-[-0.07em] md:text-[28px]">
          {item.title}
        </h2>
        <p className={cn("mt-2 text-[9px] font-bold", light ? "text-black/60" : "text-white/65")}>
          {item.kicker}
        </p>
      </div>
    </button>
  );
}
