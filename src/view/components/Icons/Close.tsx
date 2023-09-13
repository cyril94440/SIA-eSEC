import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Close: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 10 10"
    content={(color) => (
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L5 4.21433L9.05161 0.162718C9.26857 -0.0542395 9.62032 -0.0542395 9.83728 0.162718C10.0542 0.379676 10.0542 0.731435 9.83728 0.948393L5.78567 5L9.83728 9.05161C10.0542 9.26857 10.0542 9.62032 9.83728 9.83728C9.62032 10.0542 9.26857 10.0542 9.05161 9.83728L5 5.78567L0.948393 9.83728C0.731435 10.0542 0.379676 10.0542 0.162718 9.83728C-0.0542395 9.62032 -0.0542395 9.26857 0.162718 9.05161L4.21433 5L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
      />
    )}
  />
);