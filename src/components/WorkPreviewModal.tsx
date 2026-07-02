"use client";

import type { Project } from "@/data/projects";

export function WorkPreviewModal({ item, locked, onClose }: {
  item: Project | null;
  locked: boolean;
  onClose: () => void;
}) {
  if (!item) return null;

  const shell = locked
    ? "fixed inset-0 z-[80] grid place-items-center bg-black/70 px-4 backdrop-blur-md"
    : "pointer-events-none fixed inset-0 z-[80] grid place-items-center px-4";

  return (
    <div className={shell}>
      {locked && <button className="absolute inset-0" type="button" onClick={onClose} aria-label="Close" />}
      <article className="relative w-full max-w-[980px] overflow-hidden rounded-[10px] border border-line bg-card text-paper shadow-2xl">
        {locked && (
          <button type="button" onClick={onClose} className="absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-full bg-black/50 text-sm font-black text-white">
            CLOSE
          </button>
        )}
        <div className="aspect-video bg-bone p-6 text-black">
          <div className="relative size-full overflow-hidden rounded-[8px] border border-black/10 bg-black/5">
            <div className="absolute inset-x-8 top-8 h-16 rounded bg-black/10" />
            <div className="absolute inset-x-8 bottom-8 h-28 rounded bg-black/10" />
            <p className="absolute left-8 top-8 text-[10px] font-black uppercase tracking-[0.2em] text-black/40">video preview</p>
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid size-16 place-items-center rounded-full bg-black/20 text-sm font-black">PLAY</div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between gap-6 p-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted">{item.kind} preview</p>
            <h2 className="mt-2 text-4xl font-black leading-[0.9] tracking-[-0.07em]">{item.title}</h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs font-bold leading-tight text-muted md:block">{item.summary}</p>
        </div>
      </article>
    </div>
  );
}
