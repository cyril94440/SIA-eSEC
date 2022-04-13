import { Icon } from "../Icon";

export const Person: Icon = (props) => (
  <svg viewBox="0 0 16 16" fill="none">
    <path
      d="M3 14C3 14 2 14 2 13C2 12 3 9 8 9C13 9 14 12 14 13C14 14 13 14 13 14H3Z"
      fill={props.color}
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z"
      fill={props.color}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
