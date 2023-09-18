import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const body = css`
  width: ${styles.getSize(50)};
  height: ${styles.getSize(40)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const error = css`
  color: ${styles.COLOR_CRITICAL_30};
  min-height: ${styles.getSize(3)};
  margin-top: ${styles.getSize(1)};
`;

export const buttons = css`
  margin-top: ${styles.getSize(3)};
  display: flex;
  justify-content: center;
`;
