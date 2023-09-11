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
 * DIALOG STYLES
 *
 */
export const DialogOverlay = css`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = css`
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: ${styles.getSize(125)};
  max-height: ${styles.getSize(88)};
  padding: ${styles.getSize(4)};
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  &:focus {
    outline: none;
  }
`;

export const DialogTitle = css`
  margin: 0;
  ${styles.fontMedium40};
`;

export const DialogDescription = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px;
  ${styles.fontRegular14};
`;

export const IconButton = css`
  border: none;
  background-color: transparent;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
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
