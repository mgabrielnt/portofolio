"use client";

import type { Project } from "@/data/projects";

export function WorkPreviewModal({
  item,
  onClose,
}: {
  item: Project | null;
  onClose: () => void;
}) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 px-4 backdrop-blur-md">
      <button className="absolute inset-0" type="button" onClick={onClose} aria-label="Close preview" />
      <article className="relative w-full max-w-5xl overflow-hidden rounded-[10px] border border-line bg-card text-paper shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-muted">
          <span>{item.kind === "project" ? "Project Preview" : "Award Preview"}</span>
          <button type="button" onClick={onClose} className="text-paper">Close</button>
        </div>
        <div className="grid min-h-[360px] md:grid-cols-[1.4fr_0.8fr]">
          <div className="relative overflow-hidden bg-bone text-black">
            <div className="absolute inset-8 rounded border border-black/10 bg-black/5" />
            <div className="absolute inset-x-12 top-12 h-24 rounded bg-black/10" />
            <div className="absolute bottom-12 left-12 right-12 h-32 rounded bg-black/10" />
            <p className="absolute left-8 top-8 text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
              visual preview
            </p>
          </div>
          <div className="p-6">
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em]">{item.title}</h2>
            <p className="mt-5 text-sm font-bold leading-tight text-muted">{item.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {item.stack.map((stack) => <span key={stack} className="bg-white/10 px-3 py-2 text-xs font-bold">{stack}</span>)}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
