import { css } from "@emotion/react";

export const canvasWrapperCss = css`
  position: relative;
  height: 600vh;
  .eg-sec {
    height: 100vh;
    width: 100%;
    border-bottom: 2px solid var(--color-off-gray);
    position: absolute;
    font-size: 4rem;
  }
  .eg-sec-1 {
    top: 0;
  }
  .eg-sec-2 {
    top: 100vh;
  }
  .eg-sec-3 {
    top: 200vh;
  }
  .eg-sec-4 {
    top: 300vh;
  }
  .eg-sec-5 {
    top: 400vh;
  }
  .eg-sec-6 {
    top: 500vh;
  }
`;

export const canvasContainerCss = css`
  position: sticky;
  top: 0;
`;
