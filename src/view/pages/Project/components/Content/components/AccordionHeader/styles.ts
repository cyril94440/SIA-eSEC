import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  padding: ${styles.getSize(2)} 0;
`;

export const rootExpanded = css`
  margin-bottom: ${styles.getSize(2)};
`;

export const icon = css`
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
  margin-right: ${styles.getSize(2.5)};
`;

export const title = css`
  ${styles.fontMedium32};
  line-height: 1;
`;
