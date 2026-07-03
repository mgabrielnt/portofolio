"use client";

import type { Project } from "@/data/projects";

export function WorkPreviewModal({ item, locked, onClose }: {
  item: Project | null; locked: boolean; onClose: () => void;
}) {
  if (!item) return null;
  const shell = locked
    ? "fixed inset-0 z-[80] bg-black/70 p-2 backdrop-blur-md"
    : "pointer-events-none fixed inset-0 z-[80] p-2";

  return (
    <div className={shell}>
      {locked && <button className="absolute inset-0" type="button" onClick={onClose} aria-label="Close" />}
      <article className="relative mx-auto hidden h-[calc(100svh-16px)] w-full max-w-[1500px] overflow-hidden rounded-[8px] border border-black/10 bg-[#f2e8dd] text-black shadow-2xl md:block">
        {locked && <Close onClose={onClose} dark />}
        <header className="flex h-[48%] flex-col justify-center border-b border-black/10 px-[3vw]">
          <h2 className="max-w-[1320px] text-[clamp(54px,7.9vw,148px)] font-normal leading-[0.98] tracking-[-0.065em]">
            Innovation built<br />on dynamic <span className="inline-flex items-center gap-[0.18em] rounded-full border border-[#4a86f3] px-[0.18em] text-[#4a86f3]">data <span className="inline-block size-[0.8em] rounded-full bg-[#4a86f3]" /></span>
          </h2>
        </header>
        <section className="grid h-[52%] grid-cols-[1fr_1.04fr]">
          <div className="flex flex-col justify-between border-r border-black/10 px-[2.5vw] py-[4vh]">
            <InfoRow number="01." color="#a855f7" title={item.title} label="Automated professional property" />
            <InfoRow number="02." color="#4a86f3" title={item.kind === "project" ? "Launch-ready preview" : "Recognition-ready proof"} label="Interactive work showcase" />
          </div>
          <PreviewFrame />
        </section>
      </article>
      <article className="relative mx-auto h-[calc(100svh-16px)] w-full overflow-y-auto rounded-[8px] border border-line bg-[#111] p-3 text-paper shadow-2xl md:hidden">
        {locked && <Close onClose={onClose} />}
        <header className="flex items-start justify-between text-[11px] font-black uppercase leading-tight">
          <div className="flex gap-2"><div className="size-8 bg-white/10" /><div><p>Mangelek Gabriel</p><p className="font-mono normal-case">AI / Data / Web</p></div></div>
          <button type="button" onClick={onClose}>Credentials<br />Open [+]</button>
        </header>
        <h2 className="mt-10 text-[25px] font-black leading-[1.08] tracking-[-0.055em]">
          I build intelligent data systems and launch-ready web portfolios. I coordinate clean dashboard launches and AI product previews.
        </h2>
        <p className="mt-8 text-[24px] font-black leading-[1.08] tracking-[-0.055em]">
          I’m based in Indonesia, building global-ready AI portfolios for data, dashboard, and web engineering roles.
        </p>
        <div className="mt-14 flex gap-3 overflow-hidden">
          {[item.title, "StockForecast", "LLM-TFT"].map((title) => <div key={title} className="h-28 min-w-[250px] rounded bg-bone text-black"><p className="p-4 text-4xl font-black tracking-[-0.07em]">{title}</p></div>)}
        </div>
        <section className="mt-16 text-sm font-bold leading-tight"><p className="mb-4"><span className="text-accent">●</span> CONNECT</p><p>LinkedIn</p><p>Email</p><p>GitHub</p><p>WhatsApp</p><p className="mt-6">Available August 2026</p><p>Book 30-Min Discovery Call</p></section>
        <div className="mt-6 grid gap-3 text-center text-xs font-black uppercase"><button className="border border-dashed border-line py-5">Schedule a call</button><button className="border border-dashed border-line py-5">Cost estimate</button></div>
      </article>
    </div>
  );
}

function Close({ onClose, dark = false }: { onClose: () => void; dark?: boolean }) {
  return <button type="button" onClick={onClose} className={dark ? "absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full bg-black text-sm font-black text-white" : "absolute right-3 top-3 z-20 grid size-8 place-items-center rounded-full bg-white/10 text-xs font-black"}>X</button>;
}
function PreviewFrame() { return <div className="p-[4vh_3vw]"><div className="relative size-full overflow-hidden rounded-[10px] bg-[#dbe5f0]"><div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0)),radial-gradient(circle_at_50%_85%,rgba(0,0,0,.24),transparent_38%)]" /><div className="absolute inset-0 grid place-items-center"><div className="grid size-20 place-items-center rounded-full bg-white/75 text-sm font-black shadow-xl">PLAY</div></div></div></div>; }
function InfoRow({ number, color, title, label }: { number: string; color: string; title: string; label: string }) { return <div><div className="mb-4 h-1 w-full" style={{ background: color }} /><p className="text-xs text-black/70">{number}</p><div className="mt-[9vh] grid grid-cols-2 gap-8 text-[clamp(18px,1.7vw,30px)] leading-tight text-black/42"><p>{label}</p><p className="text-[clamp(12px,1vw,16px)] text-black/30">{title}</p></div></div>; }
