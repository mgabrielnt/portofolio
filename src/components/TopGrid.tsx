import { ConnectBlock } from "./ConnectBlock";
import { EcosystemBlock } from "./EcosystemBlock";
import { IntroBlock } from "./IntroBlock";
import { PositionBlock } from "./PositionBlock";
import { RecognitionBlock } from "./RecognitionBlock";

export function TopGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.25fr_1.25fr_1.5fr_1.25fr_1.25fr] xl:gap-12">
      <IntroBlock />
      <PositionBlock />
      <RecognitionBlock />
      <EcosystemBlock />
      <ConnectBlock />
    </div>
  );
}
