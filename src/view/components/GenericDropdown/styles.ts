import { css } from "@emotion/react";

export const root = css`
  position: relative;
`;

export const contentContainer = css`
  position: absolute;
  z-index: 1;
  opacity: 0;
  overflow-y: hidden;
  transition: opacity 200ms;
`;

export const contentContainerExpanded = css`
  opacity: unset;
`;

export const contentContainerCollapsing = css`
  opacity: 0;
`;

export const contentContainerFullWidth = css`
  width: 100%;
`;
