import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  flex: none;
  padding: ${styles.getSize(6)} ${styles.getSize(2)} ${styles.getSize(4)};
  width: ${styles.getSize(29)};
  color: ${styles.COLOR_WHITE};
  background: ${styles.COLOR_PRIMARY_36};
  position: relative;
`;

export const rootMinimized = css`
  width: ${styles.getSize(11)};
`;
