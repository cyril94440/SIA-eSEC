import { css } from "@emotion/react";
import * as consts from "@@consts";

export const root = css`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const sidenav = css`
  flex: none;
  width: ${consts.SIZE(11)};
  color: ${consts.COLOR_WHITE};
  background: ${consts.COLOR_PRIMARY_36};
  padding: ${consts.SIZE(6)} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const main = css`
  flex: 1;
  position: relative;
`;

export const logo = css`
  width: ${consts.SIZE(6)};
`;

export const expandIcon = css`
  cursor: pointer;
  user-select: none;
  width: ${consts.SIZE(3)};
  height: ${consts.SIZE(3)};
  position: absolute;
  left: ${consts.SIZE(-3 / 2)};
  top: ${consts.SIZE(3)};
  border-radius: 50%;
  color: ${consts.COLOR_WHITE};
  background: ${consts.COLOR_PRIMARY_60};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
`;
