import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  ${styles.fontMedium14};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${styles.getSize(1.5)} ${styles.getSize(2.5)};
  border-radius: ${styles.getSize(1 / 2)};
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${styles.COLOR_PRIMARY_60};
  }

  &:not(:last-child) {
    margin-bottom: ${styles.getSize(1)};
  }
`;

export const rootActive = css`
  color: ${styles.COLOR_PRIMARY_36};
  background: ${styles.COLOR_WHITE};
  cursor: unset;

  &:hover {
    background: ${styles.COLOR_WHITE};
  }
`;

export const icon = css`
  flex: none;
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
  display: flex;
  align-items: center;
`;

export const title = css`
  flex: 1;
  line-height: 1;
  margin-left: ${styles.getSize(2)};
`;

export const titleHidden = css`
  display: none;
`;
