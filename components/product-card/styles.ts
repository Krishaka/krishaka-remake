import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const productCardContainerCss = css`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-primary);
  border-radius: var(--bor-rad-small);
  gap: var(--padding-mid);
  position: relative;
  overflow: hidden;
  ${mediaQuery.miniDesktop} {
    width: 90%;
  }
  ${mediaQuery.tablet} {
    gap: var(--scrollbar-width);
  }

  ${mediaQuery.mobile} {
    padding: 0;
  }
  ${mediaQuery.mobileLandscape} {
    flex-direction: row;
  }
`;

export const productCardHeading = css`
  text-transform: capitalize;
  ${mediaQuery.mobile} {
    font-weight: 800;
    letter-spacing: 1.5px;
  }
`;

export const productCardImgCss = css`
  height: 300px;
  width: 100%;
  border-radius: var(--bor-rad-small);
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
  img {
    object-fit: cover;
  }
  ${mediaQuery.tablet} {
    width: 100%;
  }
  ${mediaQuery.mobile} {
    height: 25vh;
  }
  ${mediaQuery.mobileLandscape} {
    width: 40%;
    height: 200px;
    margin: auto;
    margin-left: var(--padding-small);
    img {
      object-fit: cover;
    }
  }
`;

export const productCardTextWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  padding: 0 var(--padding-mid) var(--padding-mid) var(--padding-mid);
  ${mediaQuery.tablet} {
    padding: calc(var(--padding-small) + var(--scrollbar-width));
  }
  ${mediaQuery.mobile} {
    padding: var(--padding-small);
  }
`;

export const productCardDescCss = css`
  margin-bottom: var(--padding-mid);
  ${mediaQuery.mobile} {
    margin-bottom: var(--padding-small);
    text-align: justify;
    hyphens: auto;
  }
`;

export const productCardBtnCss = css`
  align-self: flex-end;
  margin-top: auto;
  ${mediaQuery.tablet} {
    align-self: center;
  }
  ${mediaQuery.mobile} {
    background-color: transparent;
    border: 1px solid var(--color-text-default);
    color: var(--color-text-default);
    padding: var(--scrollbar-width) var(--padding-small);
  }
`;

export const cardPatternCss = css`
  position: absolute;
  height: 150%;
  aspect-ratio: 1;
  z-index: 0;
  opacity: 0.1;
  img {
    object-fit: contain;
  }
`;
