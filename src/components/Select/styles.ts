import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";

export const control = css`
  height: ${consts.SIZE(6)};
  padding: 0 ${consts.SIZE(2)};
  border-radius: ${consts.SIZE(1)};
  color: ${consts.COLOR_GREY_BLUE};
  background: ${consts.COLOR_NEUTRAL_BLUE};
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const controlText = css`
  ${styles.fontRegular14};
  flex: 1;
  line-height: 1;
`;

export const controlIcon = css`
  width: ${consts.SIZE(1.5)};
`;

export const content = css`
  background: ${consts.COLOR_NEUTRAL_BLUE};
  border-radius: ${consts.SIZE(1)};
  margin-top: ${consts.SIZE(1)};
`;

export const item = css`
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid ${consts.COLOR_NEUTRAL_95};
  }
`;

export const defaultItemContent = css`
  ${styles.fontMedium14};
  height: ${consts.SIZE(6)};
  padding: 0 ${consts.SIZE(2)};
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: ${consts.COLOR_NEUTRAL_80};
`;

export const defaultItemContentSelected = css`
  color: ${consts.COLOR_WHITE};
  background: ${consts.COLOR_PRIMARY_60};
  border-radius: ${consts.SIZE(1)};
`;
