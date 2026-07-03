import { Cursor } from "@/components/Cursor";
import { HeroScene } from "@/components/HeroScene";
import { MobileHome } from "@/components/MobileHome";
import { ScrollMark } from "@/components/ScrollMark";
import { TopGrid } from "@/components/TopGrid";
import { WorkShowcase } from "@/components/WorkShowcase";

export default function HomePage() {
  return (
    <>
      <MobileHome />
      <main className="cursor-page hidden h-screen overflow-hidden bg-ink text-paper md:flex">
        <Cursor />
        <div className="flex min-h-0 w-full flex-col">
          <section className="relative min-h-0 flex-1 overflow-hidden px-3 py-3 md:px-4">
            <TopGrid />
            <HeroScene />
            <ScrollMark />
          </section>
          <WorkShowcase />
        </div>
      </main>
    </>
  );
}
