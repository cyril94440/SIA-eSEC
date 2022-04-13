import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  display: flex;
  gap: ${styles.getSize(3)};
`;

export const item = css`
  display: flex;
  flex-direction: column;
  gap: ${styles.getSize(1)};
`;

export const itemIcon = css`
  display: flex;
  align-items: center;
  width: ${styles.getSize(11)};
  height: ${styles.getSize(10)};
  padding: ${styles.getSize(2)} ${styles.getSize(3)};
  border-radius: ${styles.getSize(1 / 2)};
  color: ${styles.COLOR_NEUTRAL_70};
  background: ${styles.COLOR_NEUTRAL_BLUE};
  cursor: pointer;
  user-select: none;
`;

export const itemIconSelected = css`
  color: ${styles.COLOR_WHITE};
  background: ${styles.COLOR_PRIMARY_36};
  cursor: unset;
`;

export const itemLabel = css`
  ${styles.fontRegular12};
`;
