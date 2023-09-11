import React, { FC } from "react";
import * as styles from "./styles";

interface FeatureItemProps {
  category: string;
  features: string[];
}
export const FeatureItem: FC<FeatureItemProps> = (props) => {
  return (
    <div css={styles.FeatureContainer}>
      <div css={styles.FeatureTitle}>{props.category}</div>
      <div>
        {props.features.map((feature, index) => (
          <div css={[styles.FeatureChild, index !== props.features.length - 1 && styles.divider]} key={index}>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};
