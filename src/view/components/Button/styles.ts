import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  transition: background 200ms;
  border-radius: ${styles.getSize(1 / 2)};
  &:disabled {
    cursor: not-allowed;
  }
`;

export const rootPrimary = css`
  ${styles.fontMedium16};
  color: ${styles.COLOR_WHITE};
  background-color: ${styles.COLOR_PRIMARY_36};
  height: ${styles.getSize(7)};
  min-width: ${styles.getSize(20)};
  line-height: 1;
  padding: 0 ${styles.getSize(3)};
  border: none;
  &:hover {
    background-color: ${styles.COLOR_PRIMARY_20};
  }
  &:disabled {
    color: ${styles.COLOR_NEUTRAL_80};
    background-color: ${styles.COLOR_NEUTRAL_BLUE};
  }
`;

export const rootSecondary = css`
  ${styles.fontMedium20};
  color: ${styles.COLOR_GREY_BLUE};
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  height: ${styles.getSize(7)};
  min-width: ${styles.getSize(20)};
  line-height: 1;
  padding: 0 ${styles.getSize(3)};
  border: none;
  &:hover {
    // COLOR_NEUTRAL_BLUE 10% darker
    background-color: #d2e3ee;
  }
`;

export const rootInfo = css`
  ${styles.fontSemiBold12};
  color: ${styles.COLOR_PRIMARY_36};
  background-color: unset;
  height: ${styles.getSize(3)};
  line-height: 1;
  padding: 0 ${styles.getSize(1.5)};
  border: 1px solid ${styles.COLOR_PRIMARY_36};
  cursor: pointer;
  &:hover {
    background-color: ${styles.COLOR_PRIMARY_90};
  }
`;

export const rootFullWidth = css`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const icon = css`
  width: ${styles.getSize(3.5)};
  height: ${styles.getSize(3.5)};
  margin-right: ${styles.getSize(3)};
`;
