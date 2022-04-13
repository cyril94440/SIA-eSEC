import { FC } from "react";
import { Button, Progress } from "@@view/components";
import * as styles from "./styles";

export interface DownloadReportProps {
  onClick: () => void;
}

export const DownloadReport: FC<DownloadReportProps> = (props) => {
  return (
    <div css={styles.root}>
      <Button title="Download report" fullWidth={true} onClick={props.onClick} />
    </div>
  );
};
