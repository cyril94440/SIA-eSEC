import { FC, ReactNode } from "react";
import { Icons } from "../Icons";
import * as styles from "./styles";

export interface CommentsWrapProps {
  children?: ReactNode;
}

export const CommentsWrap: FC<CommentsWrapProps> = (props) => {
  return (
    <>
      <div css={styles.line}>
        <div css={styles.icon}>
          <Icons.Comment />
        </div>
      </div>
      {props.children}
    </>
  );
};
