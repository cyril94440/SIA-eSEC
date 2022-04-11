import { VFC } from "react";
import { Icons } from "@@components";
import * as styles from "./styles";

export interface SidenavToggleProps {
  minimized: boolean;
  onClick: () => void;
}

export const SidenavToggle: VFC<SidenavToggleProps> = (props) => {
  const Icon = props.minimized ? Icons.ChevronRight : Icons.ChevronLeft;
  return (
    <div css={styles.root} onClick={props.onClick}>
      <Icon color="currentColor" />
    </div>
  );
};
