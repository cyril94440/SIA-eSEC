import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Search: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 24 24"
    content={(color) => (
      <>
        <circle stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" cx="11" cy="11" r="8" />
        <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
      </>
    )}
  />
);
