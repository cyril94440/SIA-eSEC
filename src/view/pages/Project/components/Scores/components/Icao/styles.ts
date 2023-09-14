import { css, keyframes } from "@emotion/react";
import * as styles from "@@view/styles";

export const overlayShow = keyframes`
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
`;

export const contentShow = keyframes`
 from {
   opacity: 0;
   transform: translate(-50%, -48%) scale(0.96);
 }
 to {
   opacity: 1;
   transform: translate(-50%, -50%) scale(1);
 }
`;

export const root = css`
  display: flex;
  align-items: baseline;
`;

export const status = css`
  ${styles.fontMedium20};
  flex: 1;
`;

export const statusValue = css`
  color: ${styles.COLOR_CRITICAL_50};
`;

export const missingFeatures = css`
  ${styles.fontMedium10Caps};
  flex: none;
  cursor: pointer;
  user-select: none;
`;

export const red = css`
  color: ${styles.COLOR_RED};
`;

/**
 *
 * FEATURE ITEM STYLES
 *
 */

export const FeatureContainer = css`
  background-color: ${styles.COLOR_WHITE};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
  padding: ${styles.getSize(3)} ${styles.getSize(4)};
  margin-bottom: ${styles.getSize(4)};
  border-radius: ${styles.getSize(1)};
`;

export const FeatureTitle = css`
  ${styles.fontMedium20}
  margin-bottom: ${styles.getSize(2)};
`;

export const FeatureChild = css`
  ${styles.fontRegular14}
`;

export const divider = css`
  border-bottom: 1px solid #eaeaea; // You can customize this color as per your design
  padding-bottom: ${styles.getSize(1)}; // Adding some padding to space out the border
  margin-bottom: ${styles.getSize(1)}; // Add margin to give some space after the divider
`;
