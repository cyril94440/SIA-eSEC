import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  display: flex;
  align-items: end;
  height: ${styles.getSize(10)};
  padding-bottom: ${styles.getSize(2)};
  color: ${styles.COLOR_SUCCESS_40};
`;

export const row = css`
  ${styles.fontMedium14};
`;

export const value = css`
  ${styles.fontRegular14};
`;
