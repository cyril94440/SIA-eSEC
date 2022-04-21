import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";
import * as styles from "@@view/styles";

export const CheckboxChecked: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 16 16"
    content={(color) => (
      <>
        <path
          fill={color}
          d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z"
        />
        <path stroke={styles.COLOR_WHITE} strokeLinecap="round" strokeLinejoin="round" d="M12 5L6.5 10.5L4 8" />
      </>
    )}
  />
);
