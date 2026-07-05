import { ConnectBlock } from "./ConnectBlock";
import { EcosystemBlock } from "./EcosystemBlock";
import { IntroBlock } from "./IntroBlock";
import { PositionBlock } from "./PositionBlock";
import { RecognitionBlock } from "./RecognitionBlock";

export function TopGrid() {
  return (
    <div className="top-display-font relative z-10 grid gap-6 text-[12px] md:grid-cols-2 xl:grid-cols-[1.2fr_1.2fr_1.45fr_1.25fr_1.2fr] xl:gap-10">
      <IntroBlock />
      <PositionBlock />
      <RecognitionBlock />
      <EcosystemBlock />
      <ConnectBlock />
    </div>
  );
}
