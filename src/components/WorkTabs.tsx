import { projects } from "@/data/projects";

export function WorkTabs() {
  return (
    <div className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-line bg-ink/60 p-1 text-[11px] font-black backdrop-blur md:flex">
      <a href="#projects" className="rounded-full bg-white/15 px-5 py-3">
        Projects <sup>{projects.length}</sup>
      </a>
      <a href="/contact" className="rounded-full px-5 py-3 text-muted">
        Awards <sup>4</sup>
      </a>
    </div>
  );
}
