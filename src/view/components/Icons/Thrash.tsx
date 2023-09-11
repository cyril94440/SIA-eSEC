import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Thrash: Icon = (props) => {
  return (
    <IconWrap
      props={props}
      viewBox="0 0 24 24"
      content={(color) => (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke={color} d="M3 6h18" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
            d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
          />
        </>
      )}
    />
  );
};
