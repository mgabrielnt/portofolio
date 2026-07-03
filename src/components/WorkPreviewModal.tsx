"use client";

import type { Project } from "@/data/projects";

export function WorkPreviewModal({ item, locked, onClose }: {
  item: Project | null;
  locked: boolean;
  onClose: () => void;
}) {
  if (!item) return null;
  const shell = locked
    ? "fixed inset-0 z-[80] grid place-items-center bg-black/55 p-3 backdrop-blur-sm"
    : "pointer-events-none fixed inset-0 z-[80] grid place-items-center p-3";

  return (
    <div className={shell}>
      {locked && <button className="absolute inset-0" type="button" onClick={onClose} aria-label="Close" />}
      <article className="relative h-[155px] w-[280px] overflow-hidden rounded-md border border-line bg-card text-paper shadow-2xl md:h-[168px] md:w-[300px]">
        {locked && <Close onClose={onClose} />}
        <MediaPlaceholder item={item} />
      </article>
    </div>
  );
}

function Close({ onClose }: { onClose: () => void }) {
  return <button type="button" onClick={onClose} className="absolute right-2 top-2 z-20 grid size-7 place-items-center rounded-full bg-black/70 text-[10px] font-black text-white">X</button>;
}

function MediaPlaceholder({ item }: { item: Project }) {
  return (
    <div className="relative size-full overflow-hidden bg-[#17172f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(99,91,255,.55),transparent_38%),linear-gradient(135deg,rgba(255,255,255,.08),transparent_55%)]" />
      <p className="absolute left-3 top-3 max-w-[72%] text-[9px] font-black uppercase tracking-[0.16em] text-white/45">
        {item.title}
      </p>
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid size-12 place-items-center rounded-full bg-white/85 text-[10px] font-black text-black shadow-xl">PLAY</div>
      </div>
      <p className="absolute bottom-3 left-3 text-[9px] font-bold text-white/45">
        Replace with image / video
      </p>
    </div>
  );
}
