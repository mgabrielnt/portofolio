import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gabriel-nexus.vercel.app";
  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [{ url: base, lastModified: new Date() }, ...projectRoutes];
}
