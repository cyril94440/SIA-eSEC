import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding: ${styles.getSize(4)};
`;

export const pageTitle = css`
  ${styles.fontMedium32};
`;

export const categoryTitle = css`
  ${styles.fontMedium20};
  margin-top: ${styles.getSize(8)};
  margin-bottom: ${styles.getSize(2)};
`;

export const pageDescription = css`
  ${styles.fontRegular14};
  margin-top: ${styles.getSize(2)};
  margin-bottom: ${styles.getSize(4)};
  max-width: ${styles.getSize(120)};
`;

export const highlight = css`
  font-style: italic;
  color: ${styles.COLOR_PRIMARY_36};
`;

export const red = css`
  color: ${styles.COLOR_RED};
`;
