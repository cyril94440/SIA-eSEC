import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface SidenavSectionProps {
  children: ReactNode;
}

export const SidenavSection: FC<SidenavSectionProps> = (props) => {
  return <div css={styles.root}>{props.children}</div>;
};
