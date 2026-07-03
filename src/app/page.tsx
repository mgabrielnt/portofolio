import { Cursor } from "@/components/Cursor";
import { HeroScene } from "@/components/HeroScene";
import { ScrollMark } from "@/components/ScrollMark";
import { TopGrid } from "@/components/TopGrid";
import { WorkShowcase } from "@/components/WorkShowcase";

export default function HomePage() {
  return (
    <main className="cursor-page min-h-screen overflow-hidden bg-ink text-paper">
      <Cursor />
      <section className="relative min-h-[700px] overflow-hidden px-3 py-3 md:min-h-[760px] md:px-4 xl:min-h-[800px]">
        <TopGrid />
        <HeroScene />
        <ScrollMark />
      </section>
      <WorkShowcase />
    </main>
  );
}
