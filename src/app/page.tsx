import { Cursor } from "@/components/Cursor";
import { HeroScene } from "@/components/HeroScene";
import { ScrollMark } from "@/components/ScrollMark";
import { TopGrid } from "@/components/TopGrid";
import { WorkShowcase } from "@/components/WorkShowcase";

export default function HomePage() {
  return (
    <main className="cursor-page min-h-screen overflow-hidden bg-ink text-paper">
      <Cursor />
      <section className="relative h-[720px] overflow-hidden px-3 py-3 md:h-[82vh] md:min-h-[720px] md:max-h-[860px] md:px-4">
        <TopGrid />
        <HeroScene />
        <ScrollMark />
      </section>
      <WorkShowcase />
    </main>
  );
}
