import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  flex: 1;
  overflow-y: auto;
`;

export const rootWithSidebar = css`
  margin-right: ${styles.getSize(59)};
`;
