"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { CursorPrompt } from "./CursorPrompt";
import { WorkCard } from "./WorkCard";
import { WorkPreviewModal } from "./WorkPreviewModal";

export function InfiniteRail({ items }: { items: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const [preview, setPreview] = useState<Project | null>(null);
  const [locked, setLocked] = useState(false);
  const looped = [...items, ...items, ...items, ...items];

  return (
    <div className="rail-wrap relative" onMouseLeave={() => { setActive(null); if (!locked) setPreview(null); }}>
      <CursorPrompt item={active} />
      <div className="overflow-hidden">
        <div className="rail-track flex w-max gap-5 px-3 md:px-4">
          {looped.map((item, index) => (
            <WorkCard
              key={`${item.slug}-${index}`}
              item={item}
              active={active?.slug === item.slug}
              onActive={(work) => { setActive(work); if (!locked) setPreview(work); }}
              onOpen={(work) => { setPreview(work); setLocked(true); }}
            />
          ))}
        </div>
      </div>
      <WorkPreviewModal item={preview} locked={locked} onClose={() => { setPreview(null); setLocked(false); }} />
    </div>
  );
}
