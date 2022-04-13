import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding-left: ${styles.getSize(2)};
  margin-bottom: ${styles.getSize(1)};
`;

export const title = css`
  ${styles.fontMedium40};
  margin-bottom: ${styles.getSize(1)};
`;

export const subtitle = css`
  ${styles.fontRegular14};
`;
