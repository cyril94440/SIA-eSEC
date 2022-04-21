import { FC, ReactNode } from "react";
import { IconProps } from "../Icon";
import * as styles from "./styles";

export interface IconWrapProps {
  props: IconProps;
  viewBox: string;
  content: (color: string) => ReactNode;
}

export const IconWrap: FC<IconWrapProps> = (props) => {
  return (
    <svg css={styles.root} viewBox={props.viewBox} fill="none">
      {props.content(props.props.color ?? "currentColor")}
    </svg>
  );
};
