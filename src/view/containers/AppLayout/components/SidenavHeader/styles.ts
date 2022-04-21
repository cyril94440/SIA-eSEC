import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${styles.getSize(16)};
`;

export const logo = css`
  width: ${styles.getSize(9)};
  margin-bottom: ${styles.getSize(2)};
`;

export const title = css`
  ${styles.fontMedium14};
  text-align: center;
`;

export const titleHidden = css`
  display: none;
`;
