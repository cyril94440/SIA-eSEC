import { FC, ReactNode } from "react";
import * as styles from "./styles";
import { SerializedStyles } from "@emotion/utils";

export interface MainProps {
  css?: SerializedStyles;
  className?: string;
  children?: ReactNode;
}

export const Main: FC<MainProps> = (props) => {
  return (
    <div className={props.className} css={styles.root}>
      {props.children}
    </div>
  );
};
