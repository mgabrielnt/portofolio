import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WorkCard({
  item,
  active,
  onActive,
  onOpen,
}: {
  item: Project;
  active: boolean;
  onActive: (item: Project) => void;
  onOpen: (item: Project) => void;
}) {
  const light = item.theme === "light";
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      onMouseEnter={() => onActive(item)}
      onFocus={() => onActive(item)}
      className={cn(
        "group relative block h-[238px] min-w-[78vw] overflow-hidden rounded-[6px] border p-5 text-left outline-none md:min-w-[500px] xl:min-w-[560px]",
        light ? "border-black/10 bg-bone text-black" : "border-line bg-card text-paper",
        active && "ring-1 ring-white/40"
      )}
    >
      <div className="absolute inset-0 opacity-80 transition duration-500 group-hover:scale-105">
        <div className="size-full bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,.23),transparent_34%)]" />
      </div>
      <p className={cn("relative text-[10px] font-black uppercase tracking-[0.2em]", light ? "text-black/35" : "text-white/45")}>
        {item.preview}
      </p>
      <div className="relative mt-[104px]">
        <h2 className="text-[33px] font-black leading-[0.9] tracking-[-0.07em] md:text-[44px]">
          {item.title}
        </h2>
        <p className={cn("mt-5 text-[11px] font-bold", light ? "text-black/55" : "text-muted")}>
          {item.kicker}
        </p>
      </div>
    </button>
  );
}
