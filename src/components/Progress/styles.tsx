import { css } from "@emotion/react";
import * as consts from "@@consts";

export const root = css`
  position: relative;
  height: ${consts.SIZE(1)};
  background: ${consts.COLOR_PRIMARY_90};
  border-radius: ${consts.SIZE(1)};
`;

export const value = css`
  position: absolute;
  inset: 0;
  background: ${consts.COLOR_SUCCESS_40};
  border-radius: ${consts.SIZE(1)};
`;
