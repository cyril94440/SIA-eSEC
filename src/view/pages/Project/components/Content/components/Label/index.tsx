import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface LabelProps {
  children: ReactNode;
}

export const Label: FC<LabelProps> = (props) => {
  return <div css={styles.root}>{props.children}</div>;
};
