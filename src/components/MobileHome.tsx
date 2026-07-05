"use client";

import Image from "next/image";
import { useState } from "react";
import { ecosystem, highlights, links, metrics, profile, recognitions } from "@/data/profile";
import { projects } from "@/data/projects";
import { InfiniteRail } from "./InfiniteRail";

export function MobileHome() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-ink p-3 pb-8 font-mono text-paper">
      <header className="flex items-start justify-between border-b border-line pb-3 text-[12px] font-black uppercase leading-tight">
        <div className="flex gap-2">
          <div className="grid size-8 place-items-center overflow-hidden bg-white/10">
            <Image
              src="/media/work/images/saya.PNG"
              alt="Mangelek Gabriel Nicholas Tambun"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div><p>{profile.name.join(" ")}</p><p className="normal-case">AI / Data / Web</p></div>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="text-right">
          Credentials<br />Open[{open ? "-" : "+"}]
        </button>
      </header>
      {open ? <Credentials /> : <MobileLanding />}
    </main>
  );
}

function MobileLanding() {
  const emailLink = links.find((link) => link.label === "Email")?.href ?? "/";

  return (
    <>
      <section className="mt-8 space-y-7 text-[25px] font-black leading-[1.08] tracking-[-0.055em]">
        <p>I build intelligent data systems and launch-ready web portfolios. I coordinate clean dashboard launches and AI product previews.</p>
        <p>I’m based in Indonesia, building global-ready AI portfolios for data, dashboard, and web engineering roles.</p>
      </section>
      <div className="mt-16 -mx-3"><InfiniteRail items={projects} /></div>
      <section className="mt-16 text-sm font-bold leading-tight">
        <p className="mb-4"><span className="text-accent">●</span> CONNECT</p>
        {links.map((link) => <a key={link.label} href={link.href} className="block">{link.label}</a>)}
        <p className="mt-6">{profile.availability}</p><p>{profile.status}</p>
      </section>
      <div className="mt-6 grid gap-3 text-center text-xs font-black uppercase tracking-[0.06em]">
        <a href={emailLink} className="border border-dashed border-line py-5">Email Me</a>
        <a href="/resume" className="border border-dashed border-line py-5">View CV</a>
      </div>
    </>
  );
}

function Credentials() {
  return (
    <section className="space-y-10 pt-6 text-[16px] font-bold leading-tight">
      <div><p>{profile.roles.join(" / ")}</p><Badge>Core Projects</Badge>{metrics.map((m) => <p key={m}>{m}</p>)}</div>
      <div><h2 className="mb-4 text-3xl font-black tracking-[-0.06em]">Credentials</h2><Badge>Projects / Thesis / Certifications</Badge>{recognitions.map((item) => <p key={item}>{item}</p>)}<Badge>Highlights</Badge>{highlights.map((item) => <p key={item}>{item}</p>)}</div>
      <div><h2 className="mb-4 text-3xl font-black tracking-[-0.06em]">Skills</h2>{ecosystem.map((item) => <p key={item}>{item}</p>)}</div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 mt-5 inline-block rounded bg-white/10 px-2 py-1 text-muted">{children}</p>;
}
