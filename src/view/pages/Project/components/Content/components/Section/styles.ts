import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding-left: ${styles.getSize(5)};
  padding-right: ${styles.getSize(3)};
`;

export const title = css`
  ${styles.fontMedium32};
  margin-bottom: ${styles.getSize(4)};
`;
