import { FC } from "react";
import * as styles from "./styles";

export const SidenavSection: FC = (props) => {
  return <div css={styles.root}>{props.children}</div>;
};
