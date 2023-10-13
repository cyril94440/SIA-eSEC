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

export const dialogOverlay = css`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 350ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const dialogContent = css`
  background-color: ${styles.COLOR_WHITE};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: ${styles.getSize(100)};
  padding: ${styles.getSize(4)};
  animation: ${contentShow} 350ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  &:focus {
    outline: none;
  }
`;

export const dialogContentFullWidth = css`
  width: 90vw;
  max-width: ${styles.getSize(125)};
`;

export const dialogContentBackgroundWhite = css`
  background-color: white;
`;

export const dialogTitle = css`
  margin: 0;
  ${styles.fontMedium40};
`;

export const dialogDescription = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px;
  ${styles.fontRegular14};
`;

export const iconButton = css`
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
