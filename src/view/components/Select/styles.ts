import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const input = css`
  height: ${styles.getSize(6)};
  padding: 0 ${styles.getSize(2)};
  border-radius: ${styles.getSize(1)};
  background: ${styles.COLOR_NEUTRAL_BLUE};
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const inputText = css`
  ${styles.fontRegular14};
  flex: 1;
  line-height: 1;
`;

export const inputIcon = css`
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
  transition: transform 200ms;
`;

export const inputIconExpanded = css`
  transform: rotate(90deg);
`;

export const content = css`
  background: ${styles.COLOR_NEUTRAL_BLUE};
  border-radius: ${styles.getSize(1)};
  margin-top: ${styles.getSize(1)};
  overflow: hidden;
`;

export const item = css`
  position: relative;

  &:hover {
    color: ${styles.COLOR_WHITE};
    background: ${styles.COLOR_PRIMARY_60_50};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${styles.COLOR_NEUTRAL_95};
  }
`;

export const itemSelected = css`
  color: ${styles.COLOR_WHITE};
  background: ${styles.COLOR_PRIMARY_60};

  &:hover {
    color: ${styles.COLOR_WHITE};
    background: ${styles.COLOR_PRIMARY_60};
  }
`;

export const defaultItemContent = css`
  ${styles.fontRegular14};
  height: ${styles.getSize(6)};
  padding: 0 ${styles.getSize(2)};
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
