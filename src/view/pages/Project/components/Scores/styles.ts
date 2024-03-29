import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding-left: ${styles.getSize(3)};
  padding-right: ${styles.getSize(5)};
  padding-top: ${styles.getSize(10)};
  background: ${styles.COLOR_NEUTRAL_BLUE};
  height: 100%;
  overflow-y: auto;
`;

export const barContainer = css`
  margin-bottom: ${styles.getSize(3)};
`;

export const barTitle = css`
  ${styles.fontMedium16}
`;
