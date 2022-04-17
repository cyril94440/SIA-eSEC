import { FC } from "react";
import { DocumentScoreDistribution } from "@@core";
import { ScoreRadar } from "../ScoreRadar";

export interface DocumentScoreDistributionRadarProps {
  value: DocumentScoreDistribution;
  targetValue: DocumentScoreDistribution;
}

export const DocumentScoreDistributionRadar: FC<DocumentScoreDistributionRadarProps> = ({ value, targetValue }) => {
  return (
    <ScoreRadar
      labels={["Body", "Design/Inks", "Personalization"]}
      values={[value.body, value.design, value.personalization]}
      targetValues={[targetValue.body, targetValue.design, targetValue.personalization]}
    />
  );
};
