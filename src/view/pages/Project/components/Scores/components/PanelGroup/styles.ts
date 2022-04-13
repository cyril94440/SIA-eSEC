import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  display: flex;
  flex-direction: column;
  gap: ${styles.getSize(4)};
`;
