import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";

export const root = css`
  display: flex;
  flex-direction: column;
  gap: ${consts.SIZE(2)};
`;

export const item = css`
  ${styles.fontRegular14};
  height: ${consts.SIZE(6)};
  padding: ${consts.SIZE(2)};
  color: ${consts.COLOR_GREY_BLUE};
  background: ${consts.COLOR_NEUTRAL_BLUE};
  border-radius: ${consts.SIZE(1)};
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${consts.SIZE(1)};
`;

export const itemActive = css`
  color: ${consts.COLOR_WHITE};
  background: ${consts.COLOR_PRIMARY_60};
  cursor: unset;
`;

export const itemIcon = css`
  flex: none;
  width: ${consts.SIZE(2.5)};
  height: ${consts.SIZE(2.5)};
`;

export const itemContent = css`
  flex: 1;
`;
