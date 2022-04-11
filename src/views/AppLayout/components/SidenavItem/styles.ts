import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";

export const root = css`
  ${styles.fontMedium14};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${consts.SIZE(1.5)} ${consts.SIZE(2.5)};
  border-radius: ${consts.SIZE(1 / 2)};
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${consts.COLOR_PRIMARY_60};
  }

  &:not(:last-child) {
    margin-bottom: ${consts.SIZE(1)};
  }
`;

export const rootActive = css`
  color: ${consts.COLOR_PRIMARY_36};
  background: ${consts.COLOR_WHITE};
  cursor: unset;

  &:hover {
    background: ${consts.COLOR_WHITE};
  }
`;

export const icon = css`
  flex: none;
  width: ${consts.SIZE(2)};
  height: ${consts.SIZE(2)};
  display: flex;
  align-items: center;
`;

export const title = css`
  flex: 1;
  line-height: 1;
  margin-left: ${consts.SIZE(2)};
`;

export const titleHidden = css`
  display: none;
`;
