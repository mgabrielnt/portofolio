"use client";

import type { Project } from "@/data/projects";

export function WorkPreviewModal({ item, locked, onClose }: {
  item: Project | null; locked: boolean; onClose: () => void;
}) {
  if (!item) return null;
  const shell = locked
    ? "fixed inset-0 z-[80] grid place-items-center bg-black/70 p-3 backdrop-blur-md"
    : "pointer-events-none fixed inset-0 z-[80] grid place-items-center p-3";
  const cards = [item.title, "StockForecast", "LLM-TFT", "AI Sentiment"];

  return (
    <div className={shell}>
      {locked && <button className="absolute inset-0" type="button" onClick={onClose} aria-label="Close" />}
      <article className="relative hidden w-[min(980px,72vw)] overflow-hidden rounded-[8px] border border-line bg-[#101025] text-white shadow-2xl md:block">
        {locked && <Close onClose={onClose} />}
        <div className="aspect-video p-3">
          <MediaPlaceholder item={item} />
        </div>
        <footer className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.1em] text-white/55">
          <span>{item.kind} preview</span>
          <span>Replace with image / video</span>
        </footer>
      </article>
      <article className="relative mx-auto max-h-[calc(100svh-16px)] w-full overflow-y-auto rounded-[8px] border border-line bg-[#111] p-3 text-paper shadow-2xl md:hidden">
        {locked && <Close onClose={onClose} />}
        <header className="flex items-start justify-between text-[11px] font-black uppercase leading-tight">
          <div className="flex gap-2"><div className="grid size-8 place-items-center bg-white/10">GT</div><div><p>Gabriel Tambun</p><p className="font-mono normal-case">AI / Data / Web</p></div></div>
          <button type="button" onClick={onClose}>Credentials<br />Open [+]</button>
        </header>
        <h2 className="mt-10 text-[23px] font-black leading-[1.08] tracking-[-0.055em]">
          I build intelligent data systems and launch-ready web portfolios. I coordinate dashboard launches and AI product previews.
        </h2>
        <p className="mt-7 text-[22px] font-black leading-[1.08] tracking-[-0.055em]">
          I’m based in Indonesia, building global-ready AI portfolios for data, dashboard, and web roles.
        </p>
        <div className="mt-12 flex gap-3 overflow-hidden">
          {cards.map((title, index) => <div key={`${title}-${index}`} className="h-28 min-w-[230px] rounded bg-bone text-black"><p className="p-4 text-3xl font-black tracking-[-0.07em]">{title}</p></div>)}
        </div>
        <section className="mt-14 text-sm font-bold leading-tight"><p className="mb-4"><span className="text-accent">●</span> CONNECT</p><p>LinkedIn</p><p>Email</p><p>GitHub</p><p>WhatsApp</p><p className="mt-6">Available August 2026</p><p>Book 30-Min Discovery Call</p></section>
        <div className="mt-6 grid gap-3 text-center text-xs font-black uppercase"><button className="border border-dashed border-line py-5">Schedule a call</button><button className="border border-dashed border-line py-5">Cost estimate</button></div>
      </article>
    </div>
  );
}

function Close({ onClose }: { onClose: () => void }) {
  return <button type="button" onClick={onClose} className="absolute right-3 top-3 z-20 grid size-8 place-items-center rounded-full bg-black/70 text-xs font-black text-white">X</button>;
}

function MediaPlaceholder({ item }: { item: Project }) {
  return (
    <div className="relative size-full overflow-hidden rounded-[6px] bg-[#17172f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(99,91,255,.55),transparent_36%),linear-gradient(135deg,rgba(255,255,255,.08),transparent_55%)]" />
      <div className="absolute left-8 top-8 text-[11px] font-black uppercase tracking-[0.18em] text-white/45">{item.title}</div>
      <div className="absolute inset-0 grid place-items-center"><div className="grid size-16 place-items-center rounded-full bg-white/85 text-xs font-black text-black shadow-xl">PLAY</div></div>
    </div>
  );
}
