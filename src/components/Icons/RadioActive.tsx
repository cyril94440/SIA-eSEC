import { Icon } from "../Icon";

export const RadioActive: Icon = (props) => (
  <svg viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9.25" stroke={props.color} strokeWidth="1.5" />
    <circle cx="10" cy="10" r="5" fill={props.color} />
  </svg>
);
