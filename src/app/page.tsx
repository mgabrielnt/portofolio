import { Cursor } from "@/components/Cursor";
import { HeroStatement } from "@/components/HeroStatement";
import { ProjectRail } from "@/components/ProjectRail";
import { ScrollMark } from "@/components/ScrollMark";
import { TopGrid } from "@/components/TopGrid";
import { WorkTabs } from "@/components/WorkTabs";

export default function HomePage() {
  return (
    <main className="cursor-page min-h-screen overflow-hidden bg-ink text-paper">
      <Cursor />
      <section className="relative h-[690px] overflow-hidden px-3 py-3 md:h-[74vh] md:min-h-[690px] md:max-h-[810px] md:px-4">
        <TopGrid />
        <HeroStatement />
        <ScrollMark />
        <WorkTabs />
      </section>
      <ProjectRail />
    </main>
  );
}
