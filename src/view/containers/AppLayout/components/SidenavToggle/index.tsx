import { FC } from "react";
import { Icons } from "@@view/components";
import * as styles from "./styles";

export interface SidenavToggleProps {
  minimized: boolean;
  onClick: () => void;
}

export const SidenavToggle: FC<SidenavToggleProps> = (props) => {
  const Icon = props.minimized ? Icons.ChevronRight : Icons.ChevronLeft;
  return (
    <div css={styles.root} onClick={props.onClick}>
      <Icon />
    </div>
  );
};
