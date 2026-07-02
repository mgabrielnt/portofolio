"use client";

import { useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectRail() {
  const railRef = useRef<HTMLDivElement>(null);

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    event.preventDefault();
    rail.scrollLeft += event.deltaY;
  }

  return (
    <section id="projects" className="border-t border-transparent">
      <div
        ref={railRef}
        onWheel={handleWheel}
        className="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth px-3 pb-3 md:px-4"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
