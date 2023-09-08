import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding: ${styles.getSize(4)};
`;

export const pageTitle = css`
  ${styles.fontMedium32};
`;

export const pageDescription = css`
  ${styles.fontRegular14};
  margin-top: ${styles.getSize(2)};
  margin-bottom: ${styles.getSize(4)};
  max-width: ${styles.getSize(120)};
`;
