import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const canvasCss = css`
  canvas {
    height: 100vh;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
  ${mediaQuery.tablet} {
    height: 65vh;
  }
`;
