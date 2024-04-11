import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const canvasWrapperCss = css`
  position: relative;
  margin-top: var(--padding-page-dw);
  height: 200vh;
`;

export const featureProdHeadingCss = css`
  display: flex;
  flex-direction: column;
  top: var(--padding-page-dw);
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
  ${mediaQuery.tablet} {
    height: 65vh;
    top: 20vh;
  }
`;

export const featuredProdDescContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
  margin-bottom: var(--padding-page-mw);

  ${mediaQuery.desktop} {
    .feat-prod-desc {
      width: 40%;
    }
  }
  ${mediaQuery.tablet} {
    gap: var(--padding-small);
    .feat-prod-desc {
      line-height: var(--padding-mid);
    }
  }
`;
