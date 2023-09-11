import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const FileUp: Icon = (props) => (
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
          d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        />
        <polyline stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" points="14 2 14 8 20 8" />
        <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 12v6" />
        <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="m15 15-3-3-3 3" />
      </>
    )}
  />
);
