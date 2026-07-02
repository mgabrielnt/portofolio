import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isLight = project.theme === "light";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative h-[240px] min-w-[320px] overflow-hidden rounded-[6px] border p-6 md:min-w-[430px] xl:min-w-[520px]",
        isLight ? "border-black/10 bg-bone text-black" : "border-line bg-card text-paper"
      )}
    >
      <div className="absolute inset-0 opacity-50 transition group-hover:scale-105">
        <div className="size-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.18),transparent_35%)]" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end">
        <h2 className="max-w-[360px] text-4xl font-bold leading-[0.9] tracking-[-0.06em] md:text-5xl">
          {project.title}
        </h2>
        <p className={cn("mt-7 text-[11px]", isLight ? "text-black/60" : "text-muted")}>
          {project.kicker}
        </p>
      </div>
    </Link>
  );
}
