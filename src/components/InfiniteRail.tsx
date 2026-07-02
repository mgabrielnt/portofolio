"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { CursorPrompt } from "./CursorPrompt";
import { WorkCard } from "./WorkCard";
import { WorkPreviewModal } from "./WorkPreviewModal";

const COPIES = 5;

function normalize(rail: HTMLDivElement) {
  const segment = rail.scrollWidth / COPIES;
  if (!segment) return;
  if (rail.scrollLeft >= segment * 4) rail.scrollLeft -= segment * 2;
  if (rail.scrollLeft <= segment) rail.scrollLeft += segment * 2;
}

export function InfiniteRail({ items }: { items: Project[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const [preview, setPreview] = useState<Project | null>(null);
  const [locked, setLocked] = useState(false);
  const looped = Array.from({ length: COPIES }, () => items).flat();

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;
    let last = 0;
    const init = () => { rail.scrollLeft = (rail.scrollWidth / COPIES) * 2; };
    const step = (time: number) => {
      const delta = last ? time - last : 16;
      last = time;
      rail.scrollLeft += delta * 0.055;
      normalize(rail);
      frame = requestAnimationFrame(step);
    };
    setTimeout(init, 80);
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [items]);

  function activate(item: Project) {
    setActive(item);
    if (!locked) setPreview(item);
  }

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail) return;
    event.preventDefault();
    rail.scrollLeft += event.deltaY + event.deltaX;
    normalize(rail);
  }

  return (
    <div className="relative" onMouseLeave={() => { setActive(null); if (!locked) setPreview(null); }}>
      <CursorPrompt item={active} />
      <div ref={railRef} onWheel={handleWheel} className="hide-scrollbar flex gap-5 overflow-x-auto px-3 md:px-4">
        {looped.map((item, index) => <WorkCard key={`${item.slug}-${index}`} item={item} active={active?.slug === item.slug} onActive={activate} onOpen={(work) => { setPreview(work); setLocked(true); }} />)}
      </div>
      <WorkPreviewModal item={preview} locked={locked} onClose={() => { setPreview(null); setLocked(false); }} />
    </div>
  );
}
