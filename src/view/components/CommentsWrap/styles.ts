import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const line = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: ${styles.getSize(1)};
  margin-bottom: ${styles.getSize(1)};
  cursor: pointer;
  user-select: none;
`;

export const icon = css`
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
`;
