import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  display: flex;
  flex-direction: column;
  gap: ${styles.getSize(2)};
`;

export const input = css`
  display: flex;
  align-items: center;
  gap: ${styles.getSize(2)};
  padding: ${styles.getSize(2)} ${styles.getSize(3)};
  background: ${styles.COLOR_NEUTRAL_BLUE};
  border-radius: ${styles.getSize(1)};
  cursor: pointer;
  user-select: none;
`;

export const inputTitle = css`
  ${styles.fontMedium16};
  flex: 1;
`;

export const inputIcon = css`
  flex: none;
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
  transition: transform 200ms;
`;

export const inputIconExpanded = css`
  transform: rotate(90deg);
`;

export const content = css`
  background-color: ${styles.COLOR_WHITE};
  padding-bottom: ${styles.getSize(1)};
  margin-top: ${styles.getSize(2)};
`;
