import { css } from "@emotion/react";

export const canvasWrapperCss = css`
  position: relative;
  margin-top: var(--padding-page-dw);
  height: 305vh;
  --sec-height: 20vh;
  margin-bottom: var(--padding-page-mw);
  .home-canvas-section-1 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 280vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .home-canvas-section-2 {
    top: var(--sec-height);
    height: 100vh;
    position: absolute;
    width: 20vw;
  }
  .home-canvas-section-3 {
    top: 130vh;
    height: 50vh;
    position: absolute;
    width: 20vw;
  }
  .home-canvas-section-4 {
    width: 20vw;
    top: 180vh;
    position: absolute;
    height: 100vh;
  }
  .home-canvas-section-5 {
    height: 25vh;
    top: 280vh;
    position: absolute;
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: var(--padding-mid);
    justify-content: flex-end;
    z-index: 1;
  }
`;

export const featuredProductHeadingCss = css`
  position: sticky;
  top: 10vh;
  display: flex;
  flex-direction: column;
  height: var(--sec-height);
  .featured-product-name {
    color: var(--color-bg-secondary);
    font-weight: 400;
    border: 2px solid var(--color-bg-secondary);
    padding: var(--padding-small) var(--padding-mid);
    border-radius: var(--bor-rad-small);
    font-size: var(--font-size-small);
    width: fit-content;
  }
`;

export const canvasContainerCss = css`
  position: sticky;
  top: 0;
`;
