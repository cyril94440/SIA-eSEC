import { css } from "@emotion/react";
import * as consts from "@@consts";

export const root = css`
  flex: none;
  padding: ${consts.SIZE(6)} ${consts.SIZE(2)} ${consts.SIZE(4)};
  width: ${consts.SIZE(29)};
  color: ${consts.COLOR_WHITE};
  background: ${consts.COLOR_PRIMARY_36};
  position: relative;
`;

export const rootMinimized = css`
  width: ${consts.SIZE(11)};
`;
