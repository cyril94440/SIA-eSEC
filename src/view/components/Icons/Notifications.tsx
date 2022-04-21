import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const Notifications: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 14 16"
    content={(color) => (
      <>
        <path fill={color} d="M7 16C8.10457 16 9 15.1046 9 14H5C5 15.1046 5.89543 16 7 16Z" />
        <path
          fill={color}
          d="M7.99516 1.09903C7.99836 1.06646 8 1.03342 8 1C8 0.447715 7.55228 0 7 0C6.44772 0 6 0.447715 6 1C6 1.03342 6.00164 1.06646 6.00484 1.09904C3.7202 1.56045 2.00002 3.57934 2.00002 6C2.00002 7.0976 1.5 12 0 13H14C12.5 12 12 7.0976 12 6C12 3.57932 10.2798 1.56042 7.99516 1.09903Z"
        />
      </>
    )}
  />
);
