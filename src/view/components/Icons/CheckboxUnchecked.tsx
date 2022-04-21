import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const CheckboxUnchecked: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 16 16"
    content={(color) => (
      <path
        fill={color}
        d="M2 1H14V-1H2V1ZM15 2V14H17V2H15ZM14 15H2V17H14V15ZM1 14V2H-1V14H1ZM2 15C1.44772 15 1 14.5523 1 14H-1C-1 15.6569 0.343146 17 2 17V15ZM15 14C15 14.5523 14.5523 15 14 15V17C15.6569 17 17 15.6569 17 14H15ZM14 1C14.5523 1 15 1.44772 15 2H17C17 0.343146 15.6569 -1 14 -1V1ZM2 -1C0.343146 -1 -1 0.343146 -1 2H1C1 1.44772 1.44772 1 2 1V-1Z"
      />
    )}
  />
);
