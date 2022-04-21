import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface SectionItemProps {
  title?: string;
  fullWidth: boolean;
  children?: ReactNode;
}

export const SectionItem: FC<SectionItemProps> = (props) => {
  return (
    <div css={[styles.root, props.fullWidth && styles.rootFullWidth]}>
      {props.title && <div css={styles.title}>{props.title}</div>}
      {props.children}
    </div>
  );
};
