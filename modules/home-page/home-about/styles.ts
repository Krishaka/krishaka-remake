import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const homeAboutContainerCss = css`
  width: 100%;
  display: flex;
  padding: var(--padding-normal);
  background-color: var(--color-bg-primary);
  border-radius: var(--bor-rad-normal);
  position: relative;
  overflow: hidden;
  gap: var(--padding-mid);
  ${mediaQuery.tablet} {
    padding: var(--padding-mid);
    border-radius: var(--bor-rad-small);
    flex-direction: column;
  }
`;

export const homeAboutImgCss = css`
  min-height: 300px;
  width: 50%;
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
  ${mediaQuery.mobileLandscape} {
    --height: 60vh;
    height: var(--height);
    min-height: var(--height);
  }
`;

export const homeAboutTextWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
`;

export const homeAboutDescCss = css`
  margin-bottom: var(--padding-mid);
  ${mediaQuery.desktop} {
    line-height: var(--line-height-large);
  }
`;

export const homeAboutBtnCss = css`
  align-self: flex-end;
  margin-top: auto;
  ${mediaQuery.tablet} {
    align-self: center;
  }
`;

export const bgPatternCss = css`
  position: absolute;
  top: -40%;
  right: -20%;
  height: 200%;
  aspect-ratio: 1;
  z-index: 0;
  opacity: 0.5;
  img {
    object-fit: contain;
  }
`;
