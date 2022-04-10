import { VFC } from "react";
import * as styles from "./styles";

export interface ButtonProps {
  title: string;
  fullWidth: boolean;
}

export const Button: VFC<ButtonProps> = (props) => {
  return <div css={[styles.root, props.fullWidth && styles.rootFullWidth]}>{props.title}</div>;
};
