import { FC } from "react";
import * as styles from "./styles";

export const Header: FC = () => {
  return (
    <div css={styles.root}>
      <div css={styles.title}>Scores</div>
      <div css={styles.subtitle}>Check out your scores in real time</div>
    </div>
  );
};
