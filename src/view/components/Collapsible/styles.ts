import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const titleContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${styles.getSize(4)} ${styles.getSize(2)};
  cursor: pointer;

  &:hover {
    background: ${styles.COLOR_NEUTRAL_BLUE};
  }
`;

export const titleContent = css`
  border: none;
  margin: 0;
  outline: none;
  text-decoration: none;
  font-size: ${styles.FONT_MEDIUM_20_SIZE};
  background: none;
  text-align: left;
  max-width: 95%;
`;

export const titleIcon = css`
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
`;

export const divider = css`
  height: 1px;
  background: ${styles.COLOR_NEUTRAL_95};
`;

export const collapseContainer = css`
  transition: height 200ms ease;
  overflow: hidden;
`;

export const collapseContent = css`
  padding: ${styles.getSize(2)};
  ${styles.fontRegular14}
`;
