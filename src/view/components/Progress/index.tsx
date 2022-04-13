import { FC } from "react";
import * as styles from "./styles";

export interface ProgressProps {
  value: number;
}

export const Progress: FC<ProgressProps> = (props) => {
  const percent = Math.min(Math.max(props.value, 0), 100);
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
