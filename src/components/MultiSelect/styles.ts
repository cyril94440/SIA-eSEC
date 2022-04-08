import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";

export const control = css`
  display: flex;
  flex-direction: column;
  gap: ${consts.SIZE(3)};
`;

export const content = css`
  padding-bottom: ${consts.SIZE(1)};
  background-color: ${consts.COLOR_WHITE};
`;

export const contentWithTopMargin = css`
  margin-top: ${consts.SIZE(1)};
`;

export const input = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${consts.SIZE(6)};
  padding: 0 ${consts.SIZE(2)};
  color: ${consts.COLOR_GREY_BLUE};
  background: ${consts.COLOR_NEUTRAL_BLUE};
  border-radius: ${consts.SIZE(1)};
  cursor: pointer;
  user-select: none;
`;

export const inputText = css`
  ${styles.fontRegular14};
  flex: 1;
  line-height: 1;
`;

export const inputIcon = css`
  width: ${consts.SIZE(1.5)};
`;

export const item = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${consts.SIZE(2)};
  height: ${consts.SIZE(6)};
  padding: 0 ${consts.SIZE(2)};
  cursor: pointer;
  user-select: none;
  &:not(:last-child) {
    border-bottom: 1px solid ${consts.COLOR_NEUTRAL_95};
  }
`;

export const itemIcon = css`
  flex: none;
  width: ${consts.SIZE(2)};
  height: ${consts.SIZE(2)};
`;

export const itemContent = css`
  ${styles.fontRegular14};
  flex: 1;
  color: ${consts.COLOR_GREY_BLUE};
`;

export const itemContentSelected = css`
  color: ${consts.COLOR_PRIMARY_60};
`;

export const itemList = css`
  background: ${consts.COLOR_NEUTRAL_BLUE};
  border-radius: ${consts.SIZE(1)};
`;
