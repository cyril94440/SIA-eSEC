import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Check: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 24 24"
    content={(color) => (
      <polyline stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" points="20 6 9 17 4 12" />
    )}
  />
);
