import { css } from "@emotion/react";
import * as consts from "./consts";

export const global = css`
  @font-face {
    //noinspection CssUnknownTarget
    src: url("/fonts/Saira-Variable.ttf") format("truetype");
    font-family: "Saira";
    font-weight: 300 600;
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
`;
