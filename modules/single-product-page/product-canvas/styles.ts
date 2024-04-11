import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const productScrollContainerCss = css`
  height: 200vh;
`;

export const productCanvasContainerCss = css`
  position: sticky;
  top: 0;
  ${mediaQuery.tablet} {
    top: 20vh;
    width: 90vw;
    height: 65vh;
  }
`;
