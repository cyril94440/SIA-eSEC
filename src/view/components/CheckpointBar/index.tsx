import React from "react";
import * as styles from "./styles";
import * as globalStyle from "@@view/styles";

interface CheckpointBarProps {
  progression: number;
  color?: string;
}

export const CheckpointBar: React.FC<CheckpointBarProps> = ({ progression, color }) => {
  const checkpoints = 2;
  const checkpointPercentages = Array.from({ length: checkpoints }).map(
    (_, index) => (100 / (checkpoints + 1)) * (index + 1)
  );
  const redWidth = Math.min(progression, 34);
  const yellowWidth = Math.max(0, Math.min(progression - 32, 32));
  const greenWidth = Math.max(0, progression - 66);
  const checkpointColors = [globalStyle.COLOR_RED, globalStyle.COLOR_YELLOW];

  return (
    <div css={styles.container}>
      <div css={styles.progressBarSegment(globalStyle.COLOR_RED, redWidth)}></div>
      <div css={styles.progressBarSegment(globalStyle.COLOR_YELLOW, yellowWidth)}></div>
      <div css={styles.progressBarSegment(globalStyle.COLOR_SUCCESS_40, greenWidth)}></div>

      {checkpointPercentages.map((percentage, index) => (
        <div key={index} css={styles.checkpoint(checkpointColors[index], percentage <= progression, percentage)}></div>
      ))}
    </div>
  );
};
