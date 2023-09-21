import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  display: flex;
  align-items: baseline;
`;

export const status = css`
  ${styles.fontMedium20};
  flex: 1;
`;

export const statusValueComplete = css`
  color: ${styles.COLOR_SUCCESS_40};
`;

export const statusValueNotComplete = css`
  color: ${styles.COLOR_CRITICAL_50};
`;

export const missingFeatures = css`
  ${styles.fontMedium10Caps};
  flex: none;
  cursor: pointer;
  user-select: none;
`;
