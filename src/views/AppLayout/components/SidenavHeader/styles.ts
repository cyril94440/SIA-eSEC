import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${consts.SIZE(16)};
`;

export const logo = css`
  width: ${consts.SIZE(6)};
  margin-bottom: ${consts.SIZE(2)};
`;

export const title = css`
  ${styles.fontMedium14};
  text-align: center;
`;

export const titleHidden = css`
  display: none;
`;
