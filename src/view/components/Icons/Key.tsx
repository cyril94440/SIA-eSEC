import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Key: Icon = (props) => {
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
            d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"
          />
          <circle
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
            cx="16.5"
            cy="7.5"
            r=".5"
          />
        </>
      )}
    />
  );
};
