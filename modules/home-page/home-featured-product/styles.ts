import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const canvasWrapperCss = css`
  position: relative;
  margin-top: var(--padding-page-dw);
  height: 300vh;
  margin-bottom: var(--padding-page-mw);
`;

export const featuredProdInfoWrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
`;

export const featuredProdContainerCss = css`
  height: 100%;
`;

export const featureProdHeadingCss = css`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: var(--padding-page-dw);
  ${mediaQuery.desktop} {
    top: 20vh;
  }
`;

export const featuredProdNameCss = css`
  color: var(--color-bg-secondary);
  font-weight: 400;
  border: 2px solid var(--color-bg-secondary);
  padding: var(--padding-small) var(--padding-mid);
  border-radius: var(--bor-rad-small);
  font-size: var(--font-size-small);
  width: fit-content;
  ${mediaQuery.tablet} {
    font-size: var(--font-size-default);
    padding: var(--scrollbar-width) var(--padding-small);
    flex-shrink: 0;
    height: fit-content;
  }
`;

export const canvasContainerCss = css`
  position: sticky;
  top: 0;
  z-index: -1;
  ${mediaQuery.desktop} {
    overflow-x: hidden;
    canvas {
      transform: translateX(20%);
    }
  }
`;

export const featuredProdDescWrapperCss = css`
  position: sticky;
  top: 70vh;
  ${mediaQuery.miniDesktop} {
    top: 80vh;
  }
`;

export const featuredProdDescContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
  ${mediaQuery.desktop} {
    .feat-prod-desc {
      width: 40%;
    }
  }
`;
