import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";
import * as styles from "@@view/styles";

export const BadgePlus: Icon = (props) => {
  return (
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
            d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
            x1="12"
            x2="12"
            y1="8"
            y2="16"
          />
          <line
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
            x1="8"
            x2="16"
            y1="12"
            y2="12"
          />
        </>
      )}
    />
  );
};
