import type { Project } from "@/data/projects";

export function CursorPrompt({ item }: { item: Project | null }) {
  if (!item) return null;

  return (
    <div className="pointer-events-none absolute left-1/2 top-[-54px] z-30 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-line bg-ink/75 px-5 py-3 text-[11px] font-black uppercase tracking-[0.08em] text-paper backdrop-blur md:flex">
      <span>{item.kind === "project" ? "View preview" : "View award"}</span>
      <span className="text-muted">Click to pin</span>
    </div>
  );
}
