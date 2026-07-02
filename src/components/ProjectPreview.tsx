import type { Preview } from "@/data/projects";

export function ProjectPreview({ variant }: { variant: Preview; light: boolean }) {
  return (
    <div className="relative h-[96px] overflow-hidden rounded border border-white/10">
      <div className="absolute inset-4 grid grid-cols-4 gap-2 opacity-50">
        <span className="bg-current" />
        <span className="bg-current" />
        <span className="bg-current" />
        <span className="bg-current" />
      </div>
      <p className="absolute left-4 top-3 text-[10px] font-bold uppercase tracking-[0.2em]">
        {variant}
      </p>
    </div>
  );
}
