import { FC } from "react";
import * as styles from "./styles";

export interface IcaoProps {
  onMissingFeaturesClick: () => void;
}

export const Icao: FC<IcaoProps> = (props) => {
  return (
    <div css={styles.root}>
      <div css={styles.status}>
        ICAO: <span css={styles.statusValue}>Not compliant</span>
      </div>
      <div css={styles.missingFeatures} onClick={props.onMissingFeaturesClick}>
        Missing Features
      </div>
    </div>
  );
};
