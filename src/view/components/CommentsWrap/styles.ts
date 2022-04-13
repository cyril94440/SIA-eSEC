import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const line = css`
  ${styles.fontRegular12};
  text-align: end;
  margin-bottom: ${styles.getSize(1)};
  cursor: pointer;
  user-select: none;
`;
