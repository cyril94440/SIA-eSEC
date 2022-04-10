import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";

export const root = css`
  display: flex;
  gap: ${consts.SIZE(3)};
`;

export const item = css`
  display: flex;
  flex-direction: column;
  gap: ${consts.SIZE(1)};
`;

export const itemIcon = css`
  display: flex;
  align-items: center;
  width: ${consts.SIZE(11)};
  height: ${consts.SIZE(10)};
  padding: ${consts.SIZE(2)} ${consts.SIZE(3)};
  border-radius: ${consts.SIZE(1 / 2)};
  color: ${consts.COLOR_NEUTRAL_70};
  background: ${consts.COLOR_NEUTRAL_BLUE};
  cursor: pointer;
  user-select: none;
`;

export const itemIconSelected = css`
  color: ${consts.COLOR_WHITE};
  background: ${consts.COLOR_PRIMARY_36};
  cursor: unset;
`;

export const itemLabel = css`
  ${styles.fontRegular12};
  color: ${consts.COLOR_GREY_BLUE};
`;
