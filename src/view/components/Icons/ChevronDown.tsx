import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const ChevronDown: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 14 8"
    content={(color) => (
      <path stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 1L7 7L1 1" />
    )}
  />
);
