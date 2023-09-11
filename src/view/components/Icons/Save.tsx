import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Save: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 24 24"
    content={(color) => (
      <>
        <path
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
        />
        <polyline
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          points="17 21 17 13 7 13 7 21"
        />
        <polyline stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" points="7 3 7 8 15 8" />
      </>
    )}
  />
);
