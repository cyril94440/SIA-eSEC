import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Terms: Icon = (props) => {
  return (
    <IconWrap
      props={props}
      viewBox="0 0 24 24"
      content={(color) => (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
            d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
            d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke={color} d="M7 21h10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke={color} d="M12 3v18" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
            d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
          />
        </>
      )}
    />
  );
};
