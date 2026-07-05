import { metrics, profile } from "@/data/profile";
import { DotLabel } from "./DotLabel";
import Image from "next/image";
import { Tag } from "./Tag";

export function IntroBlock() {
  return (
    <article>
      <DotLabel>Profile</DotLabel>
      <div className="flex items-start gap-3">
        <div className="grid size-12 place-items-center overflow-hidden border border-line bg-white/5 text-sm font-bold">
          <Image
            src="/media/work/images/saya.PNG"
            alt="Mangelek Gabriel Nicholas Tambun"
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="font-bold leading-[1.08]">
          {profile.name.map((line) => <p key={line}>{line}</p>)}
          <p>{profile.birthYear}</p>
        </div>
        <div className="ml-auto mt-2 hidden h-9 w-8 scanline opacity-50 md:block" />
      </div>
      <p className="mt-4 text-sm leading-tight text-paper/90">{profile.location}</p>
      <p className="text-sm leading-tight text-paper/90">{profile.intro}</p>
      <div className="mt-4"><Tag>Selected Portfolio</Tag></div>
      <div className="mt-3 text-sm font-bold leading-tight">
        {metrics.map((metric) => <p key={metric}>{metric}</p>)}
      </div>
    </article>
  );
}
