import { Cursor } from "@/components/Cursor";
import { HeroScene } from "@/components/HeroScene";
import { ScrollMark } from "@/components/ScrollMark";
import { TopGrid } from "@/components/TopGrid";
import { WorkShowcase } from "@/components/WorkShowcase";

export default function HomePage() {
  return (
    <main className="cursor-page min-h-screen overflow-hidden bg-ink text-paper">
      <Cursor />
      <section className="relative h-[500px] overflow-hidden px-3 py-3 md:h-[calc(100svh-235px)] md:min-h-[500px] md:max-h-[560px] md:px-4">
        <TopGrid />
        <HeroScene />
        <ScrollMark />
      </section>
      <WorkShowcase />
    </main>
  );
}
