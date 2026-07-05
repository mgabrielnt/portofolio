import { ecosystem } from "@/data/profile";
import { DotLabel } from "./DotLabel";

export function EcosystemBlock() {
  return (
    <article>
      <DotLabel>Capabilities</DotLabel>
      <div className="text-sm font-bold leading-tight">
        {ecosystem.map((item) => <p key={item}>{item}</p>)}
      </div>
    </article>
  );
}
