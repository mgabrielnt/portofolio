import { profile } from "@/data/profile";
import { DotLabel } from "./DotLabel";
import { Tag } from "./Tag";

const previous = ["PT Mandiri Sekuritas", "Universitas Diponegoro", "Personal AI/Data Projects"];

export function PositionBlock() {
  return (
    <article>
      <DotLabel>Position</DotLabel>
      <div className="text-sm font-bold leading-tight">
        {profile.roles.map((role) => <p key={role}>{role}</p>)}
      </div>
      <div className="mt-3"><Tag>Avg. project scope</Tag></div>
      <div className="mt-3 text-sm leading-tight text-paper/90">
        <p>Dev: dashboard + model + web</p>
        <p>Design + dev: portfolio system</p>
      </div>
      <div className="mt-3"><Tag>Previous</Tag></div>
      <div className="mt-3 text-sm leading-tight text-paper/90">
        {previous.map((item) => <p key={item}>{item}</p>)}
      </div>
    </article>
  );
}
