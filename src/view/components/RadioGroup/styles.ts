import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  display: flex;
  flex-direction: column;
  gap: ${styles.getSize(2)};
`;

export const item = css`
  ${styles.fontRegular14};
  height: ${styles.getSize(6)};
  padding: ${styles.getSize(2)};
  background: ${styles.COLOR_NEUTRAL_BLUE};
  border-radius: ${styles.getSize(1)};
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${styles.getSize(1)};
`;

export const itemActive = css`
  color: ${styles.COLOR_WHITE};
  background: ${styles.COLOR_PRIMARY_60};
  cursor: unset;
`;

export const itemIcon = css`
  flex: none;
  width: ${styles.getSize(2.5)};
  height: ${styles.getSize(2.5)};
`;

export const itemContent = css`
  flex: 1;
`;
