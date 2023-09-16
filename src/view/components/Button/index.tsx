import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface ButtonProps {
  title: string;
  kind?: ButtonKind;
  icon?: ReactNode;
  fullWidth?: boolean;
  onClick: () => void;
}

export enum ButtonKind {
  Primary = "Primary",
  Secondary = "Secondary",
  Info = "Info",
}

export const Button: FC<ButtonProps> = (props) => {
  const kind = props.kind ?? ButtonKind.Primary;
  const fullWidth = props.fullWidth ?? false;
  return (
    <div
      css={[
        styles.root,
        kind === ButtonKind.Primary && styles.rootPrimary,
        kind === ButtonKind.Secondary && styles.rootSecondary,
        kind === ButtonKind.Info && styles.rootInfo,
        fullWidth && styles.rootFullWidth,
      ]}
      onClick={props.onClick}
    >
      {kind === ButtonKind.Secondary && <div css={styles.icon}>{props.icon}</div>}
      {props.title}
    </div>
  );
};
