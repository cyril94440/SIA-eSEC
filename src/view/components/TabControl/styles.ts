import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const tabs = css`
  display: flex;
  flex-flow: row nowrap;
  gap: ${styles.getSize(5)};
  padding: ${styles.getSize(2)} 0;
  margin-bottom: ${styles.getSize(5)};
  border-bottom: 1px solid ${styles.COLOR_NEUTRAL_80};
  background: ${styles.COLOR_WHITE};
`;

export const tab = css`
  ${styles.fontMedium16};
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  opacity: 0.5;
  transition: opacity 250ms;
`;

export const tabActive = css`
  cursor: unset;
  opacity: unset;
`;
