import { highlights, recognitions } from "@/data/profile";
import { DotLabel } from "./DotLabel";
import { Tag } from "./Tag";

export function RecognitionBlock() {
  return (
    <article>
      <DotLabel>Impact</DotLabel>
      <Tag>Thesis / Projects / Experience</Tag>
      <div className="mt-3 text-sm font-bold leading-tight">
        {recognitions.map((item) => <p key={item}>{item}</p>)}
      </div>
      <div className="mt-4"><Tag>Highlights</Tag></div>
      <div className="mt-3 text-sm leading-tight text-paper/90">
        {highlights.map((item) => <p key={item}>{item}</p>)}
      </div>
    </article>
  );
}
