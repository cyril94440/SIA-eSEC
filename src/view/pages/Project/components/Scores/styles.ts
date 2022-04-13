import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  flex: 1;
  min-width: ${styles.getSize(60)};
  padding-left: ${styles.getSize(3)};
  padding-right: ${styles.getSize(5)};
  padding-top: ${styles.getSize(10)};
  background: ${styles.COLOR_NEUTRAL_BLUE};
`;
