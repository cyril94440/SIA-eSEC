import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  height: 100%;
  overflow-y: auto;
  padding-bottom: ${styles.getSize(50)};
  position: relative;
`;

export const buttonsContainer = css`
  display: flex;
  flex-direction: row;
  max-width: 589px;
  padding-left: ${styles.getSize(5)};
  gap: ${styles.getSize(3)};
  padding-bottom: ${styles.getSize(10)};
`;

export const tabsXPadding = styles.getSize(5);
