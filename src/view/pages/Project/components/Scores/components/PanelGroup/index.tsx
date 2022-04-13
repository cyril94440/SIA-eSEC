import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface PanelGroupProps {
  children: ReactNode;
}

export const PanelGroup: FC<PanelGroupProps> = (props) => {
  return <div css={styles.root}>{props.children}</div>;
};
