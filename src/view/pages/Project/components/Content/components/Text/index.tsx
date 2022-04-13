import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface TextProps {
  children: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
  return <div css={styles.root}>{props.children}</div>;
};
