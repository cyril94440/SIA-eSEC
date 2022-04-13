import { FC, ReactNode } from "react";
import * as styles from "./styles";

export interface CommentsWrapProps {
  text: string;
  children: ReactNode;
}

export const CommentsWrap: FC<CommentsWrapProps> = (props) => {
  return (
    <>
      <div css={styles.line}>{props.text}</div>
      {props.children}
    </>
  );
};
