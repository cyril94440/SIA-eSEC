import { VFC } from "react";
import * as styles from "./styles";

export interface ButtonProps {
  title: string;
  kind?: ButtonKind;
  fullWidth?: boolean;
}

export enum ButtonKind {
  Primary = "Primary",
  Secondary = "Secondary",
}

export const Button: VFC<ButtonProps> = (props) => {
  const kind = props.kind ?? ButtonKind.Primary;
  const fullWidth = props.fullWidth ?? false;
  return (
    <div css={[styles.root, kind === ButtonKind.Secondary && styles.rootSecondary, fullWidth && styles.rootFullWidth]}>
      {props.title}
    </div>
  );
};
