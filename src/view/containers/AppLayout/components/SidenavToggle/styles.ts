import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  cursor: pointer;
  user-select: none;
  width: ${styles.getSize(3)};
  height: ${styles.getSize(3)};
  position: absolute;
  right: ${styles.getSize(-3 / 2)};
  top: ${styles.getSize(3)};
  border-radius: 50%;
  color: ${styles.COLOR_WHITE};
  background: ${styles.COLOR_PRIMARY_60};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${styles.getSize(3 / 4)};

  &:hover {
    background: ${styles.COLOR_PRIMARY_20};
  }
`;
