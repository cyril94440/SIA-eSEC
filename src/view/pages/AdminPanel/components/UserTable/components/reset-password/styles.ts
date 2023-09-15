import { css, keyframes } from "@emotion/react";
import * as styles from "@@view/styles";

export const keyIcon = css`
  color: ${styles.COLOR_PRIMARY_36};
  background-color: ${styles.COLOR_PRIMARY_90};
  transition: background-color 200ms;
  border-radius: ${styles.getSize(1 / 2)};
  width: ${styles.getSize(4.5)};
  height: ${styles.getSize(4.5)};
  padding: ${styles.getSize(1)};
  cursor: pointer;

  &:hover {
    background-color: ${styles.COLOR_PRIMARY_60_50};
  }
`;

export const confirmButton = css`
  outline: none;
  border: none;
  cursor: pointer;
  color: ${styles.COLOR_PRIMARY_36};
  background-color: ${styles.COLOR_PRIMARY_90};
  padding: ${styles.getSize(1)} ${styles.getSize(2)};
  border-radius: ${styles.getSize(1 / 2)};

  &:hover {
    background-color: ${styles.COLOR_PRIMARY_60_50};
  }
`;

export const username = css`
  font-weight: ${styles.FONT_MEDIUM_32_WEIGHT};
`;
