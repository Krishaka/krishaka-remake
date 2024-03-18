import { css } from "@emotion/react";

export const productScrollContainerCss = css`
  height: 200vh;
  transform: translateY(-50vh);
`;

export const productCanvasContainerCss = css`
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 20%;
  canvas {
    transform: translateY(-20%);
  }
`;
