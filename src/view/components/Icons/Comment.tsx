import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Comment: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 16 16"
    content={(color) => (
      <path
        fill={color}
        d="M14.4 0H1.6C0.7176 0 0 0.7176 0 1.6V16L4.2664 12.8H14.4C15.2824 12.8 16 12.0824 16 11.2V1.6C16 0.7176 15.2824 0 14.4 0ZM14.4 11.2H3.7336L1.6 12.8V1.6H14.4V11.2Z"
      />
    )}
  />
);
