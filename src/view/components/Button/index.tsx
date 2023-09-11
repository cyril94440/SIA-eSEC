import { FC } from "react";
import * as styles from "./styles";

export interface ButtonProps {
  title: string;
  kind?: ButtonKind;
  fullWidth?: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export enum ButtonKind {
  Primary = "Primary",
  Secondary = "Secondary",
  WithIcon = "WithIcon",
}

export const Button: FC<ButtonProps> = (props) => {
  const kind = props.kind ?? ButtonKind.Primary;
  const fullWidth = props.fullWidth ?? false;
  return (
    <div
      css={[
        styles.root,
        kind === ButtonKind.Secondary && styles.rootSecondary,
        kind === ButtonKind.WithIcon && styles.rootWithIcon,
        fullWidth && styles.rootFullWidth,
      ]}
      onClick={props.onClick}
    >
      {kind === ButtonKind.WithIcon && <div css={styles.icon}>{props.icon}</div>}
      {props.title}
    </div>
  );
};
