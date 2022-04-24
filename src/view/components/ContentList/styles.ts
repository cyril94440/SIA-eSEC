import { css } from "@emotion/react";

export const root = css`
  position: relative;
  transition: transform 250ms;
`;

export const item = css`
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 250ms;
`;

export const itemActive = css`
  opacity: unset;
`;
