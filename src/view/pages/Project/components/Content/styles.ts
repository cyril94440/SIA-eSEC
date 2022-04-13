import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  flex: 2;
  padding-left: ${styles.getSize(5)};
  padding-right: ${styles.getSize(3)};
  padding-bottom: ${styles.getSize(50)};
`;
