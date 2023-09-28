import { FC } from "react";
import { Icons } from "@@view/components";
import * as styles from "./styles";

export interface SidenavHeaderProps {
  minimized: boolean;
}

export const SidenavHeader: FC<SidenavHeaderProps> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.logo}>
        <Icons.App color="white" />
      </div>
      <div css={[styles.title, props.minimized && styles.titleHidden]}>Design secure IDs</div>
    </div>
  );
};
