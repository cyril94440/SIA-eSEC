import { VFC } from "react";
import * as styles from "./styles";

export interface ProgressProps {
  percent: number;
}

export const Progress: VFC<ProgressProps> = (props) => {
  const percent = Math.min(Math.max(props.percent, 0), 100);
  return (
    <div css={styles.root}>
      <div
        css={styles.value}
        style={{
          width: `${percent}%`,
        }}
      />
    </div>
  );
};
