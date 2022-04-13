import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  margin-bottom: ${styles.getSize(7)};
  max-width: ${styles.getSize(65)};
`;

export const rootFullWidth = css`
  max-width: unset;
`;

export const title = css`
  ${styles.fontRegular20};
  margin-bottom: ${styles.getSize(2)};
`;
