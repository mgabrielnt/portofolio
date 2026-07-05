import { profile } from "@/data/profile";
import { DotLabel } from "./DotLabel";
import { Tag } from "./Tag";

const previous = [
  "PT Biro Klasifikasi Indonesia",
  "Prima Insan Mulia Hospital",
  "Aluesa Global Digitek",
  "Universitas Diponegoro",
];

export function PositionBlock() {
  return (
    <article>
      <DotLabel>Focus</DotLabel>
      <div className="text-sm font-bold leading-tight">
        {profile.roles.map((role) => <p key={role}>{role}</p>)}
      </div>
      <div className="mt-3"><Tag>Core Work</Tag></div>
      <div className="mt-3 text-sm leading-tight text-paper/90">
        <p>Data Pipeline + AI Model + Dashboard</p>
        <p>Frontend System + API Integration</p>
      </div>
      <div className="mt-3"><Tag>Experience</Tag></div>
      <div className="mt-3 text-sm leading-tight text-paper/90">
        {previous.map((item) => <p key={item}>{item}</p>)}
      </div>
    </article>
  );
}
