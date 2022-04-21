import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface SidebarProps {
  children: ReactNode;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  return <div css={styles.root}>{props.children}</div>;
};
