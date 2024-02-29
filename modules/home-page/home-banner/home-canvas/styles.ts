import { css } from "@emotion/react";

export const canvasWrapperCss = css`
  position: relative;
  height: 265vh;
  .eg-sec-1 {
    position: sticky;
    top: 0vh;
    height: 30vh;
    bottom: 100vh;
  }
  .eg-sec-2 {
    top: 30vh;
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
  display: flex;
  align-items: center;
  gap: var(--padding-normal);
  .featured-product-name {
    color: var(--color-bg-secondary);
    font-weight: 400;
    border: 2px solid var(--color-bg-secondary);
    padding: var(--padding-small) var(--padding-mid);
    border-radius: var(--bor-rad-small);
    font-size: var(--font-size-small);
  }
`;

export const canvasContainerCss = css`
  position: sticky;
  top: 0;
`;
