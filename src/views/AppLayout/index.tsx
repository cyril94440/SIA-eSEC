import { FC } from "react";
import { Icons } from "@@components";
import * as styles from "./styles";

export const AppLayout: FC = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.sidenav}>
        <div css={styles.logo}>
          <Icons.App color="currentColor" />
        </div>
      </div>
      <div css={styles.main}>
        {props.children}
        <div css={styles.expandIcon}>
          <Icons.ChevronRight color="currentColor" />
        </div>
      </div>
    </div>
  );
};
