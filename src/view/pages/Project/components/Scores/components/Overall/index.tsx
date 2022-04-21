import { FC } from "react";
import { Progress } from "@@view/components";
import * as styles from "./styles";

export interface OverallProps {
  value: number;
}

export const Overall: FC<OverallProps> = (props) => {
  return (
    <>
      <div css={styles.value}>{props.value.toFixed(0)}</div>
      <Progress value={props.value} />
    </>
  );
};
