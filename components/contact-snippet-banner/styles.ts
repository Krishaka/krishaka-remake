import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const ContactSnippetBannerCss = css`
  padding: var(--padding-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-mid);
  overflow: hidden;
  border-radius: var(--bor-rad-normal);
  background-color: var(--color-bg-primary);
  position: relative;
  & > * {
    z-index: 1;
  }
  ${mediaQuery.tablet} {
    padding: var(--padding-mid);
    border-radius: var(--bor-rad-small);
  }
  ${mediaQuery.mobileLandscape} {
    padding: var(--padding-mid);
    border-radius: var(--bor-rad-small);
  }
`;

export const contactSnippetDescCss = css`
  text-align: center;
`;

export const snippetPatternCss = css`
  position: absolute;
  height: 200%;
  aspect-ratio: 1;
  top: -55%;
  left: -5%;
  z-index: 0;
  opacity: 0.4;
  filter: grayscale(1) invert(1);
  img {
    object-fit: contain;
  }
`;
