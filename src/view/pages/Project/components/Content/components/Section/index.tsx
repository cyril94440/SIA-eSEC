import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface SectionProps {
  title?: string;
  children?: ReactNode;
}

export const Section: FC<SectionProps> = (props) => {
  return (
    <>
      {props.title && <div css={styles.title}>{props.title}</div>}
      {props.children}
    </>
  );
};
