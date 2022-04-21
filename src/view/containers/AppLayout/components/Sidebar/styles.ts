import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${styles.getSize(60)};
  overflow-y: auto;
`;
