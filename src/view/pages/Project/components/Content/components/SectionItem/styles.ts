import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  margin-bottom: ${styles.getSize(7)};
  width: 60%;
  min-width: ${styles.getSize(50)};
`;

export const rootFullWidth = css`
  width: 100%;
`;

export const title = css`
  ${styles.fontRegular20};
  margin-bottom: ${styles.getSize(2)};
`;
