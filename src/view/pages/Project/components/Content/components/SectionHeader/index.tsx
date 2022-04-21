import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface SectionHeaderProps {
  children?: ReactNode;
}

export const SectionHeader: FC<SectionHeaderProps> = (props) => {
  return <div css={styles.root}>{props.children}</div>;
};
