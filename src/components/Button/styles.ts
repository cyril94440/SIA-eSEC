import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";

export const root = css`
  ${styles.fontMedium16};
  display: inline-flex;
  align-items: center;
  height: ${consts.SIZE(6)};
  padding: 0 ${consts.SIZE(3)};
  color: ${consts.COLOR_WHITE};
  background: ${consts.COLOR_PRIMARY_36};
  border-radius: ${consts.SIZE(1 / 2)};
  cursor: pointer;
  user-select: none;
`;

export const rootFullWidth = css`
  display: flex;
  justify-content: center;
`;
