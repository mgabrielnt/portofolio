"use client";

import type { Project } from "@/data/projects";
import { WorkCard } from "./WorkCard";

export function InfiniteRail({ items }: { items: Project[] }) {
  const looped = [...items, ...items, ...items];

  return (
    <div className="hide-scrollbar flex gap-5 overflow-x-auto px-3 md:px-4">
      {looped.map((item, index) => (
        <WorkCard key={`${item.slug}-${index}`} item={item} active={false} onActive={() => {}} />
      ))}
    </div>
  );
}
