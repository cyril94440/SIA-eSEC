import { VFC } from "react";
import { DocumentScoreThreatsProtection } from "@@types";
import { ScoreRadar } from "../ScoreRadar";

export interface DocumentScoreThreatsProtectionRadarProps {
  value: DocumentScoreThreatsProtection;
  targetValue: DocumentScoreThreatsProtection;
}

export const DocumentScoreThreatsProtectionRadar: VFC<DocumentScoreThreatsProtectionRadarProps> = ({
  value,
  targetValue,
}) => {
  return (
    <ScoreRadar
      labels={["Counterfeit", "Alteration", "Recycling", "Stealing", "Imposter"]}
      values={[value.counterfeit, value.alteration, value.recycling, value.stealing, value.imposter]}
      targetValues={[
        targetValue.counterfeit,
        targetValue.alteration,
        targetValue.recycling,
        targetValue.stealing,
        targetValue.imposter,
      ]}
    />
  );
};
