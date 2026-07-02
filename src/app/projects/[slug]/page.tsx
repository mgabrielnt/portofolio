import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Case Study` : "Project" };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-ink px-4 py-5 text-paper md:px-8">
      <Link href="/" className="text-xs font-bold uppercase text-muted">← Back</Link>
      <section className="mt-16 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
          Case Study
        </p>
        <h1 className="mt-4 text-6xl font-bold tracking-[-0.07em] md:text-8xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-tight text-muted">
          {project.summary}
        </p>
      </section>
      <section className="mt-16 grid gap-5 md:grid-cols-3">
        {project.metrics.map((metric) => (
          <div key={metric} className="border border-line bg-card p-5 text-2xl font-bold">
            {metric}
          </div>
        ))}
      </section>
      <section className="mt-16 grid gap-8 md:grid-cols-[1fr_2fr]">
        <h2 className="text-sm font-bold uppercase text-muted">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => <span key={item} className="bg-white/10 px-3 py-2 text-xs">{item}</span>)}
        </div>
      </section>
    </main>
  );
}
