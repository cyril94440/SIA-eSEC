import { FC } from "react";
import { DocumentIcaoStatus } from "@@core/project";
import * as styles from "./styles";

export interface IcaoProps {
  status: DocumentIcaoStatus;
  onStatusClick: () => void;
}

export const Icao: FC<IcaoProps> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.status}>
        ICAO:{" "}
        <span css={[props.status.completed ? styles.statusValueComplete : styles.statusValueNotComplete]}>
          {props.status.completed ? "Complete" : "Not complete"}
        </span>
      </div>
      <div css={styles.missingFeatures} onClick={props.onStatusClick}>
        {props.status.completed ? "Show status" : "Missing features"}
      </div>
    </div>
  );
};
