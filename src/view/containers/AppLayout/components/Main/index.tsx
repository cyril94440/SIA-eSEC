import { FC, ReactNode } from "react";
import * as styles from "./styles";
import { SerializedStyles } from "@emotion/utils";

export interface MainProps {
  css?: SerializedStyles;
  className?: string;
  children?: ReactNode;
  withSidebar: boolean;
}

export const Main: FC<MainProps> = (props) => {
  return (
    <div css={[styles.root, props.withSidebar && styles.rootWithSidebar]} className={props.className}>
      {props.children}
    </div>
  );
};
