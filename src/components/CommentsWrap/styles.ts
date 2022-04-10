import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";

export const line = css`
  ${styles.fontRegular12};
  text-align: end;
  margin-bottom: ${consts.SIZE(1)};
  color: ${consts.COLOR_GREY_BLUE};
  cursor: pointer;
  user-select: none;
`;
