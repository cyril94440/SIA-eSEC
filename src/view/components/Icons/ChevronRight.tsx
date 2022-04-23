import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const ChevronRight: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 8 14"
    content={(color) => (
      <path stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M1 13L7 7L1 1" />
    )}
  />
);
