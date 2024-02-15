import { css } from "@emotion/react";

export const canvasWrapperCss = css`
  position: relative;
  height: 1300vh;
`;

export const canvasContainerCss = css`
  position: sticky;
  top: calc(var(--header-height) + var(--padding-page-dw));
`;
