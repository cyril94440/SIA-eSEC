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

export const AlertDialogOverlay = css`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 350ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const AlertDialogContent = css`
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${styles.getSize(64)};
  padding: ${styles.getSize(2)} ${styles.getSize(4)};
  animation: ${contentShow} 350ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  &:focus {
    outline: none;
  }
`;

export const AlertDialogTitle = css`
  font-size: ${styles.FONT_MEDIUM_20_SIZE};
`;

export const AlertDialogDescription = css`
  font-size: ${styles.FONT_MEDIUM_16_SIZE};
`;

export const buttonsContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${styles.getSize(2)};
`;

export const cancel = css`
  cursor: pointer;
  background-color: ${styles.COLOR_NEUTRAL_95};
  padding: ${styles.getSize(1)} ${styles.getSize(2)};
  border-radius: ${styles.getSize(1 / 2)};

  &:hover {
    background-color: ${styles.COLOR_NEUTRAL_90};
  }
`;
