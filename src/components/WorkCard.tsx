import type { Project } from "@/data/projects";

export function WorkCard({ item }: { item: Project }) {
  return (
    <a href={item.href} className="block h-[232px] min-w-[360px] rounded border border-line bg-card p-5 md:min-w-[520px]">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">{item.preview}</p>
      <h2 className="mt-24 text-[34px] font-black leading-[0.9] tracking-[-0.07em] md:text-[44px]">
        {item.title}
      </h2>
      <p className="mt-5 text-[11px] font-bold text-muted">{item.kicker}</p>
    </a>
  );
}
