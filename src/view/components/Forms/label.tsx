import { FC, ReactNode } from "react";
import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export interface LabelProps {
  title?: ReactNode;
  children?: ReactNode;
}

export const Label: FC<LabelProps> = (props) => {
  return (
    <label css={Css.root}>
      {props.title && <div css={Css.title}>{props.title}</div>}
      {props.children}
    </label>
  );
};

namespace Css {
  export const root = css`
    margin-bottom: ${styles.getSize(2)};
  `;

  export const title = css`
    ${styles.fontMedium14};
    color: ${styles.COLOR_BLACK};
    margin-bottom: ${styles.getSize(0.5)};
  `;
}
