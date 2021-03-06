import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const itemHoverColor = "itemHoverColor";

export const input = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${styles.getSize(6)};
  padding: 0 ${styles.getSize(2)};
  background: ${styles.COLOR_NEUTRAL_BLUE};
  border-radius: ${styles.getSize(1)};
  cursor: pointer;
  user-select: none;
`;

export const inputText = css`
  ${styles.fontRegular14};
  flex: 1;
  line-height: 1;
`;

export const inputIcon = css`
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
  transition: transform 200ms;
`;

export const inputIconExpanded = css`
  transform: rotate(90deg);
`;

export const content = css`
  padding-bottom: ${styles.getSize(1)};
  background-color: ${styles.COLOR_WHITE};
  margin-top: ${styles.getSize(2)};
`;

export const item = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${styles.getSize(2)};
  padding: ${styles.getSize(1.5)} ${styles.getSize(2)};
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${styles.COLOR_PRIMARY_60_50};

    .${itemHoverColor} {
      color: ${styles.COLOR_WHITE};
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${styles.COLOR_NEUTRAL_95};
  }
`;

export const itemIcon = css`
  flex: none;
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
  color: ${styles.COLOR_NEUTRAL_80};
`;

export const itemIconChecked = css`
  color: ${styles.COLOR_PRIMARY_60};
`;

export const itemIconClose = css`
  width: ${styles.getSize(1.25)};
  height: ${styles.getSize(1.25)};
  color: ${styles.COLOR_GREY_BLUE};
`;

export const itemContent = css`
  flex: 1;
  ${styles.fontRegular14};
`;

export const itemContentSelected = css`
  color: ${styles.COLOR_PRIMARY_60};
`;

export const itemList = css`
  background: ${styles.COLOR_NEUTRAL_BLUE};
  border-radius: ${styles.getSize(1)};
  overflow: hidden;
  margin-top: ${styles.getSize(2)};
`;
