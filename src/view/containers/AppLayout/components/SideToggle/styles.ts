import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  position: absolute;
  top: ${styles.getSize(3)};
  width: ${styles.getSize(3)};
  height: ${styles.getSize(3)};
  border-radius: 50%;
  color: ${styles.COLOR_WHITE};
  background: ${styles.COLOR_PRIMARY_60};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${styles.getSize(3 / 4)};
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${styles.COLOR_PRIMARY_20};
  }
`;

export const rootLeft = css`
  right: ${styles.getSize(-3 / 2)};
`;

export const rootRight = css`
  left: ${styles.getSize(3 / 2)};
`;
