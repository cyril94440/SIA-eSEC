import { FC } from "react";
import { Progress } from "@@view/components";
import * as styles from "./styles";
import { CheckpointBar } from "view/components/CheckpointBar";

export interface OverallProps {
  value: number;
}

export const Overall: FC<OverallProps> = (props) => {
  return (
    <>
      <div css={styles.value}>{Math.floor(props.value)}</div>
      {/* <Progress value={props.value * 10} /> */}
      <CheckpointBar progression={props.value * 10} />
    </>
  );
};
