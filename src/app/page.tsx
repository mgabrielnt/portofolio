import { HeroStatement } from "@/components/HeroStatement";
import { ProjectRail } from "@/components/ProjectRail";
import { ScrollMark } from "@/components/ScrollMark";
import { TopGrid } from "@/components/TopGrid";
import { WorkTabs } from "@/components/WorkTabs";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper">
      <section className="relative flex min-h-[76vh] flex-col px-3 py-4 md:px-4">
        <TopGrid />
        <HeroStatement />
        <ScrollMark />
        <WorkTabs />
      </section>
      <ProjectRail />
      <p className="px-3 pb-5 pt-4 text-[11px] text-muted md:px-4">
        V1: layout follows the reference composition with top credentials,
        central statement, native horizontal work cards, and premium dark UI.
      </p>
    </main>
  );
}
