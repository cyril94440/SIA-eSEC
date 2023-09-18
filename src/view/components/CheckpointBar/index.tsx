import React from "react";
import * as styles from "./styles";
import * as globalStyle from "@@view/styles";

interface CheckpointBarProps {
  checkpoints: number;
  progression: number;
  color?: string;
}

export const CheckpointBar: React.FC<CheckpointBarProps> = ({
  checkpoints,
  progression,
  color = globalStyle.COLOR_SUCCESS_40,
}) => {
  const checkpointPercentages = Array.from({ length: checkpoints }).map(
    (_, index) => (100 / (checkpoints + 1)) * (index + 1)
  );

  return (
    <div css={styles.container}>
      <div css={styles.progressBar(color, progression)}></div>
      {checkpointPercentages.map((percentage, index) => (
        <div key={index} css={styles.checkpoint(color, percentage <= progression, percentage)}></div>
      ))}
    </div>
  );
};
