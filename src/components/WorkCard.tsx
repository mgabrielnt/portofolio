import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WorkCard({ item, active, onActive, onOpen }: {
  item: Project;
  active: boolean;
  onActive: (item: Project) => void;
  onOpen: (item: Project) => void;
}) {
  const light = item.theme === "light";
  return (
    <button
      data-work-card
      type="button"
      onClick={() => onOpen(item)}
      onMouseEnter={() => onActive(item)}
      onFocus={() => onActive(item)}
      className={cn(
        "relative block h-[180px] w-[320px] flex-none overflow-hidden rounded-md border p-4 text-left outline-none",
        light ? "border-black/10 bg-bone text-black" : "border-line bg-card text-paper",
        active && "ring-1 ring-white/40"
      )}
    >
      <div className="absolute inset-0 bg-white/5" />
      <p className={cn("relative text-[9px] font-black uppercase tracking-[0.2em]", light ? "text-black/35" : "text-white/45")}>
        {item.preview}
      </p>
      <div className="relative mt-20">
        <h2 className="text-[30px] font-black leading-[0.9] tracking-[-0.07em]">
          {item.title}
        </h2>
        <p className={cn("mt-3 text-[10px] font-bold", light ? "text-black/55" : "text-muted")}>
          {item.kicker}
        </p>
      </div>
    </button>
  );
}
