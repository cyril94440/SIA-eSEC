import { FC } from "react";
import { DocumentScoreOverall } from "@@core";
import { ScoreRadar } from "../ScoreRadar";

export interface DocumentScoreOverallRadarProps {
  value: DocumentScoreOverall;
  targetValue: DocumentScoreOverall;
}

export const DocumentScoreOverallRadar: FC<DocumentScoreOverallRadarProps> = ({ value, targetValue }) => {
  return (
    <ScoreRadar
      labels={["Distribution", "Protection against threats", "Security level coverage", "Design"]}
      values={[value.distribution, value.threatsProtection, value.levelsCoverage, value.design]}
      targetValues={[
        targetValue.distribution,
        targetValue.threatsProtection,
        targetValue.levelsCoverage,
        targetValue.design,
      ]}
    />
  );
};
