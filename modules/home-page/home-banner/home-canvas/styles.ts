import { css } from "@emotion/react";

export const canvasWrapperCss = css`
  position: relative;
  margin-top: var(--padding-page-dw);
  height: 255vh;
  --sec-height: 20vh;
  .eg-sec-1 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 230vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .eg-sec-2 {
    top: var(--sec-height);
    height: 100vh;
    position: absolute;
    width: 20vw;
  }
  .eg-sec-3 {
    width: 20vw;
    top: 130vh;
    position: absolute;
    height: 100vh;
  }
  .eg-sec-4 {
    height: 25vh;
    top: 230vh;
    position: absolute;
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: var(--padding-mid);
    justify-content: flex-end;
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
