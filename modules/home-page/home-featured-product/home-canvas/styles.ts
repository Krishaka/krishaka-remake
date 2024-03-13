import { css } from "@emotion/react";

export const canvasCss = css`
  border: 1px solid red;
  canvas {
    height: 100vh;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;
