import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface SidebarProps {
  children: ReactNode;
  collapsed: boolean;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  return <div css={[styles.root, props.collapsed && styles.rootCollapsed]}>{props.children}</div>;
};
