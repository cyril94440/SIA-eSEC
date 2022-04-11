import { css } from "@emotion/react";
import * as consts from "@@consts";

export const root = css`
  cursor: pointer;
  user-select: none;
  width: ${consts.SIZE(3)};
  height: ${consts.SIZE(3)};
  position: absolute;
  right: ${consts.SIZE(-3 / 2)};
  top: ${consts.SIZE(3)};
  border-radius: 50%;
  color: ${consts.COLOR_WHITE};
  background: ${consts.COLOR_PRIMARY_60};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;

  &:hover {
    background: ${consts.COLOR_PRIMARY_20};
  }
`;
