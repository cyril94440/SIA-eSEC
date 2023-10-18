import { css } from "@emotion/react";
import * as consts from "./consts";

export const global = css`
  @font-face {
    //noinspection CssUnknownTarget
    src: url("/fonts/Saira-Variable.ttf") format("truetype");
    font-family: "Saira";
    font-weight: 300 600;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "Saira", sans-serif;
    color: ${consts.COLOR_GREY_BLUE};
    background: ${consts.COLOR_WHITE};
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .TooltipContent {
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 15px;
    line-height: 1;
    color: var(--violet-11);
    background-color: white;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  .TooltipContent[data-state="delayed-open"][data-side="top"] {
    animation-name: slideDownAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="right"] {
    animation-name: slideLeftAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="bottom"] {
    animation-name: slideUpAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="left"] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
