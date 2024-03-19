import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const productScrollContainerCss = css`
  height: 200vh;
  transform: translateY(-50vh);
`;

export const productCanvasContainerCss = css`
  position: sticky;
  top: 0;
  ${mediaQuery.tablet} {
    width: 90vw;
  }
`;
