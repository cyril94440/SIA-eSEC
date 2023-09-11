import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  width: ${styles.getSize(4.5)};
  height: ${styles.getSize(4.5)};
  padding: ${styles.getSize(1)};
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  cursor: pointer;
`;
