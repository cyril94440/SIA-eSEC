import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  height: 100%;
  overflow-y: auto;
  padding-bottom: ${styles.getSize(50)};
  position: relative;
`;

export const tabsXPadding = styles.getSize(5);
