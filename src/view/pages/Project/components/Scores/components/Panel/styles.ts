import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding: ${styles.getSize(4)} ${styles.getSize(6)};
  background: ${styles.COLOR_WHITE};
  border-radius: ${styles.getSize(1)};
  box-shadow: ${`0px ${styles.getSize(1 / 2)} ${styles.getSize(3)} rgba(0, 0, 0, 0.04)`};
`;

export const rootSquare = css`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
`;

export const title = css`
  ${styles.fontMedium20};
  margin-bottom: ${styles.getSize(4)};
`;

export const squareWrap = css`
  flex: 1;
  position: relative;
`;

export const squareInner = css`
  position: absolute;
  inset: 0;
`;
