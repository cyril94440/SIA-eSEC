import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface PanelProps {
  title?: string;
  square?: boolean;
  children: ReactNode;
}

export const Panel: FC<PanelProps> = (props) => {
  return (
    <div css={[styles.root, props.square && styles.rootSquare]}>
      {props.title && <div css={styles.title}>{props.title}</div>}
      {!props.square ? (
        props.children
      ) : (
        <div css={styles.squareWrap}>
          <div css={styles.squareInner}>{props.children}</div>
        </div>
      )}
    </div>
  );
};
