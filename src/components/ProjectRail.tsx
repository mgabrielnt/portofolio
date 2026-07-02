"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

function loop(rail: HTMLDivElement) {
  const part = rail.scrollWidth / 3;
  if (!part) return;
  if (rail.scrollLeft >= part * 2) rail.scrollLeft -= part;
  if (rail.scrollLeft <= 1) rail.scrollLeft += part;
}

export function ProjectRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const looped = [...projects, ...projects, ...projects];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;
    const tick = () => {
      rail.scrollLeft += 0.34;
      loop(rail);
      frame = requestAnimationFrame(tick);
    };
    requestAnimationFrame(() => { rail.scrollLeft = rail.scrollWidth / 3; });
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail) return;
    event.preventDefault();
    rail.scrollLeft += event.deltaY + event.deltaX;
    loop(rail);
  }

  return (
    <section id="projects" className="relative -mt-1 pb-4">
      <div ref={railRef} onWheel={handleWheel} className="hide-scrollbar flex gap-5 overflow-x-auto px-3 md:px-4">
        {looped.map((project, index) => <ProjectCard key={`${project.slug}-${index}`} project={project} />)}
      </div>
    </section>
  );
}
