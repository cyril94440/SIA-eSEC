import { FC, ReactNode } from "react";
import * as styles from "./styles";
import { SerializedStyles } from "@emotion/utils";

export interface MainProps {
  css?: SerializedStyles;
  className?: string;
  children?: ReactNode;
  withSidebar: boolean;
  sideBarCollapsed?: boolean;
}

export const Main: FC<MainProps> = (props) => {
  return (
    <div
      css={[
        styles.root,
        props.withSidebar && styles.rootWithSidebar,
        props.withSidebar && props.sideBarCollapsed && styles.rootWithSidebarCollapsed,
      ]}
      className={props.className}
    >
      {props.children}
    </div>
  );
};
