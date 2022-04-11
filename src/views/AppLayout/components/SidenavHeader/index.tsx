import { VFC } from "react";
import { Icons } from "@@components";
import * as styles from "./styles";

export interface SidenavHeaderProps {
  minimized: boolean;
}

export const SidenavHeader: VFC<SidenavHeaderProps> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.logo}>
        <Icons.App color="currentColor" />
      </div>
      <div css={[styles.title, props.minimized && styles.titleHidden]}>Design secure IDs</div>
    </div>
  );
};
