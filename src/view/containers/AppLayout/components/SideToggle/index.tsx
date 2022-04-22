import { FC } from "react";
import { Icons } from "@@view/components";
import * as styles from "./styles";

export interface SideToggleProps {
  placement: "left" | "right";
  minimized: boolean;
  onClick: () => void;
}

export const SideToggle: FC<SideToggleProps> = (props) => {
  const Icon =
    (props.minimized && props.placement === "right") || (!props.minimized && props.placement === "left")
      ? Icons.ChevronLeft
      : Icons.ChevronRight;

  return (
    <div
      css={[
        styles.root,
        props.placement === "left" && styles.rootLeft,
        props.placement === "right" && styles.rootRight,
      ]}
      onClick={props.onClick}
    >
      <Icon />
    </div>
  );
};
