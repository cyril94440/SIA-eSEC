import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  ${styles.fontMedium16};
  line-height: 1;
  display: inline-flex;
  align-items: center;
  height: ${styles.getSize(6)};
  padding: 0 ${styles.getSize(3)};
  color: ${styles.COLOR_WHITE};
  background: ${styles.COLOR_PRIMARY_36};
  border-radius: ${styles.getSize(1 / 2)};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  &:hover {
    background: ${styles.COLOR_PRIMARY_20};
  }

  transition: background 200ms;
`;

export const rootSecondary = css`
  ${styles.fontSemiBold12};
  line-height: 1;
  height: ${styles.getSize(3)};
  padding: 0 ${styles.getSize(1.5)};
  color: ${styles.COLOR_PRIMARY_36};
  background: unset;
  border: 1px solid ${styles.COLOR_PRIMARY_36};

  &:hover {
    background: ${styles.COLOR_PRIMARY_90};
  }
`;

export const rootWithIcon = css`
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  color: ${styles.COLOR_GREY_BLUE};
  ${styles.fontMedium20};

  &:hover {
    // COLOR_NEUTRAL_BLUE 10% darker
    background-color: #d2e3ee;
  }
`;

export const rootOnlyIcon = css`
  background-color: unset;
  width: ${styles.getSize(3.5)};
  height: ${styles.getSize(3.5)};
`;

export const rootFullWidth = css`
  display: flex;
  justify-content: center;
`;

export const icon = css`
  width: ${styles.getSize(3.5)};
  height: ${styles.getSize(3.5)};
  margin-right: ${styles.getSize(3)};
`;
