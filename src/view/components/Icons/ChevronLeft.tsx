import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const ChevronLeft: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 8 14"
    content={(color) => (
      <path stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 13L1 7L7 1" />
    )}
  />
);
