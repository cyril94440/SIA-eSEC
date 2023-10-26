import React from "react";
import * as styles from "./styles";

interface CheckpointBarProps {
  progression: number;
}

export const CheckpointBar: React.FC<CheckpointBarProps> = ({ progression }) => {
  return (
    <div css={styles.container}>
      <div css={styles.progressBarSegment}>
        <div css={styles.progressBarFill(progression)}></div>
      </div>
    </div>
  );
};
