import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectCard({ project }: { project: Project }) {
  const light = project.theme === "light";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "h-[240px] min-w-[340px] rounded border p-4 md:min-w-[460px] xl:min-w-[520px]",
        light ? "border-black/10 bg-bone text-black" : "border-line bg-card text-paper"
      )}
    >
      <div className="flex h-full flex-col justify-between">
        <ProjectPreview variant={project.preview} light={light} />
        <div>
          <h2 className="text-[34px] font-black leading-[0.9] tracking-[-0.07em] md:text-[44px]">
            {project.title}
          </h2>
          <p className={light ? "mt-5 text-[11px] text-black/55" : "mt-5 text-[11px] text-muted"}>
            {project.kicker}
          </p>
        </div>
      </div>
    </Link>
  );
}
