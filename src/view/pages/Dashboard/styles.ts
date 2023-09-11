import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding: ${styles.getSize(4)};
`;

export const mainTitle = css`
  ${styles.fontMedium40};
`;

export const description = css`
  ${styles.fontRegular14};
  max-width: ${styles.getSize(86)};
  margin-bottom: ${styles.getSize(4)};
`;

export const buttonsContainer = css`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
`;

export const or = css`
  ${styles.fontMedium20};
  margin: 0 ${styles.getSize(8)};
`;
