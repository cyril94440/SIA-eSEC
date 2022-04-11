import { FC } from "react";
import * as styles from "./styles";

export interface SidenavProps {
  minimized: boolean;
}

export const Sidenav: FC<SidenavProps> = (props) => {
  return <div css={[styles.root, props.minimized && styles.rootMinimized]}>{props.children}</div>;
};
