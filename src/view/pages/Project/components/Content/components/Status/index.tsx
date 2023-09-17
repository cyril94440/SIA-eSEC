import { FC } from "react";
import { formatProjectStatusString, ProjectStatus } from "../../../../../../../core/project";
import * as styles from "./styles";

export interface StatusProps {
  value: ProjectStatus;
}

export const Status: FC<StatusProps> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.row}>
        Status: <span css={styles.value}>{formatProjectStatusString(props.value)}</span>
      </div>
    </div>
  );
};
