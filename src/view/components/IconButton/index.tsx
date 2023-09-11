import { CSSProperties, FC } from "react";
import * as styles from "./styles";
import { SerializedStyles, css } from "@emotion/react";

export interface IconButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  style?: CSSProperties;
  customStyles: SerializedStyles;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const combinedStyles = css`
    ${styles.root};
    ${props.customStyles};
  `;
  return (
    <div css={combinedStyles} onClick={props.onClick}>
      {props.icon}
    </div>
  );
};
