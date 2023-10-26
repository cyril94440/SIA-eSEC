import { css } from "@emotion/react";
import * as styles from "@@view/styles";

const barHeight = 8; // Adjust as needed
const barBackground = styles.COLOR_NEUTRAL_95;
const checkpointSize = 14; // Adjust as needed

export const container = css`
  position: relative;
  height: ${barHeight}px;
  border-radius: ${barHeight / 2}px;
  display: flex;
  background-color: ${barBackground};
  margin-top: ${styles.getSize(1)};
  margin-bottom: ${styles.getSize(1)};
`;

export const progressBarSegment = css`
  position: relative;
  height: ${barHeight}px;
  width: 100%;
  border-radius: ${barHeight / 2}px;
  overflow: hidden;
`;

export const progressBarFill = (progression: number) => css`
  position: absolute;
  background-image: linear-gradient(to right, ${styles.COLOR_PRIMARY_60}, ${styles.COLOR_PRIMARY_36});
  height: 100%;
  width: 100%;
  border-radius: ${barHeight / 2}px;
  clip-path: inset(0 ${100 - progression}% 0 0);
  transition: clip-path 200ms;
`;

export const checkpoint = (color: string, isCheck: boolean, percentage: number) => css`
  position: absolute;
  top: ${barHeight / 2}px;
  left: ${percentage}%;
  transform: translate(-50%, -50%);
  background-color: ${isCheck ? color : barBackground};
  width: ${checkpointSize}px;
  height: ${checkpointSize}px;
  border-radius: 50%;
  transition: background-color 200ms;
  box-shadow: 0 0 0 1px white; // This creates the "cut out" effect
`;

export const checkpointTooltip = css`
  position: absolute;
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 5px 10px;
  z-index: 1;
  bottom: 125%; // Position the tooltip above the circle
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const checkpointHoverable = css`
  &:hover ${checkpointTooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

export { checkpointSize };
