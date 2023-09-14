import { css, keyframes } from "@emotion/react";
import * as styles from "@@view/styles";

export const deleteUserIcon = css`
  color: ${styles.COLOR_RED};
  background-color: rgba(235, 87, 87, 0.2);
  transition: background-color 200ms;
  border-radius: ${styles.getSize(1 / 2)};
  width: ${styles.getSize(4.5)};
  height: ${styles.getSize(4.5)};
  padding: ${styles.getSize(1)};
  cursor: pointer;

  &:hover {
    background-color: rgba(235, 87, 87, 0.4);
  }
`;

export const deleteButton = css`
  outline: none;
  border: none;
  cursor: pointer;
  color: ${styles.COLOR_WHITE};
  background-color: ${styles.COLOR_RED};
  padding: ${styles.getSize(1)} ${styles.getSize(2)};
  border-radius: ${styles.getSize(1 / 2)};

  &:hover {
    background-color: ${styles.COLOR_RED_90};
  }
`;
