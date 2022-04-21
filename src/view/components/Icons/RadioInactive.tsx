import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const RadioInactive: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 20 20"
    content={(color) => <circle cx="10" cy="10" r="9.25" stroke={color} strokeWidth="1.5" />}
  />
);
