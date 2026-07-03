"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { CursorPrompt } from "./CursorPrompt";
import { WorkCard } from "./WorkCard";
import { WorkPreviewModal } from "./WorkPreviewModal";

function normalize(rail: HTMLDivElement) {
  const half = rail.scrollWidth / 2;
  if (rail.scrollLeft > half) rail.scrollLeft -= half;
  if (rail.scrollLeft < 8) rail.scrollLeft += half;
}

export function InfiniteRail({ items }: { items: Project[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const suppressPreview = useRef(false);
  const suppressTimer = useRef<number | null>(null);
  const [active, setActive] = useState<Project | null>(null);
  const [preview, setPreview] = useState<Project | null>(null);
  const [locked, setLocked] = useState(false);
  const looped = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;
    let last = performance.now();
    const tick = (time: number) => {
      if (!paused.current) rail.scrollLeft += (time - last) * 0.16;
      last = time;
      normalize(rail);
      frame = requestAnimationFrame(tick);
    };
    rail.scrollLeft = rail.scrollWidth / 4;
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [items]);

  function activate(work: Project) {
    setActive(work);
    if (!locked && !suppressPreview.current) setPreview(work);
  }

  function leave() { paused.current = false; setActive(null); if (!locked) setPreview(null); }

  function wheel(event: React.WheelEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail) return;
    event.preventDefault();
    suppressPreview.current = true;
    if (!locked) setPreview(null);
    if (suppressTimer.current) window.clearTimeout(suppressTimer.current);
    suppressTimer.current = window.setTimeout(() => { suppressPreview.current = false; }, 220);
    rail.scrollLeft += (event.deltaY + event.deltaX) * 2.4;
    normalize(rail);
  }

  return (
    <div className="relative" onMouseEnter={() => { paused.current = true; }} onMouseLeave={leave}>
      <CursorPrompt item={active} />
      <div ref={railRef} onWheel={wheel} className="hide-scrollbar overflow-x-auto px-3 md:px-4">
        <div className="flex w-max gap-4">
          {looped.map((item, index) => <WorkCard key={`${item.slug}-${index}`} item={item} active={active?.slug === item.slug} onActive={activate} onOpen={(work) => { setPreview(work); setLocked(true); }} />)}
        </div>
      </div>
      <WorkPreviewModal item={preview} locked={locked} onClose={() => { setPreview(null); setLocked(false); }} />
    </div>
  );
}
