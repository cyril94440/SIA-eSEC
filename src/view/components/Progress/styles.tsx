import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  position: relative;
  height: ${styles.getSize(1)};
  background: ${styles.COLOR_PRIMARY_90};
  border-radius: ${styles.getSize(1)};
`;

export const value = css`
  position: absolute;
  inset: 0;
  background: ${styles.COLOR_SUCCESS_40};
  border-radius: ${styles.getSize(1)};
`;
