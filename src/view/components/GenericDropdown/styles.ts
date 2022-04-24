import { css } from "@emotion/react";

export const root = css`
  position: relative;
`;

export const contentContainer = css`
  position: absolute;
  z-index: 1;
  height: 0;
  opacity: 0;
  overflow-y: hidden;
  transition: opacity 200ms;
`;

export const contentContainerExpanded = css`
  height: unset;
  opacity: unset;
`;

export const contentContainerFullWidth = css`
  width: 100%;
`;
