"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { CursorPrompt } from "./CursorPrompt";
import { WorkCard } from "./WorkCard";
import { WorkPreviewModal } from "./WorkPreviewModal";

function normalize(rail: HTMLDivElement) {
  const segment = rail.scrollWidth / 3;
  if (!segment) return;
  if (rail.scrollLeft >= segment * 2) rail.scrollLeft -= segment;
  if (rail.scrollLeft <= 1) rail.scrollLeft += segment;
}

export function InfiniteRail({ items }: { items: Project[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const [modal, setModal] = useState<Project | null>(null);
  const looped = Array.from({ length: 5 }, () => items).flat();

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;
    const step = () => {
      rail.scrollLeft += 0.64;
      normalize(rail);
      frame = requestAnimationFrame(step);
    };
    requestAnimationFrame(() => { rail.scrollLeft = rail.scrollWidth / 3; });
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [items]);

  useEffect(() => {
    const openActive = (event: KeyboardEvent) => {
      if (event.key === "Enter" && active) setModal(active);
      if (event.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", openActive);
    return () => window.removeEventListener("keydown", openActive);
  }, [active]);

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail) return;
    event.preventDefault();
    rail.scrollLeft += event.deltaY + event.deltaX;
    normalize(rail);
  }

  return (
    <div className="relative" onMouseLeave={() => setActive(null)}>
      <CursorPrompt item={active} />
      <div ref={railRef} onWheel={handleWheel} className="hide-scrollbar flex gap-5 overflow-x-auto px-3 md:px-4">
        {looped.map((item, index) => <WorkCard key={`${item.slug}-${index}`} item={item} active={active?.slug === item.slug} onActive={setActive} onOpen={setModal} />)}
      </div>
      <WorkPreviewModal item={modal} onClose={() => setModal(null)} />
    </div>
  );
}
