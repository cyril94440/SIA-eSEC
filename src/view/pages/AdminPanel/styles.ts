import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding: ${styles.getSize(4)};
`;

export const mainTitle = css`
  ${styles.fontMedium40};
  margin-bottom: ${styles.getSize(8)};
`;
