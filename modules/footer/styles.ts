import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const footerWrapperCss = css`
  background-color: var(--color-bg-primary);
  padding-top: var(--padding-normal);
  border-radius: var(--bor-rad-normal) var(--bor-rad-normal) 0 0;
`;

export const footerLinksContainerCss = css`
  --grid-col-num: 4;
  display: grid;
  grid-template-columns: repeat(var(--grid-col-num), 1fr);
  gap: 5vw;
  ${mediaQuery.miniDesktop} {
    --grid-col-num: 2;
  }
  ${mediaQuery.tablet} {
    --grid-col-num: 1;
    gap: var(--padding-normal);
  }
`;

export const footerHighlightTextCss = css`
  --fs: 14.5vw;
  font-size: var(--fs);
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(var(--color-text-default), var(--color-bg-primary-light), var(--color-bg-primary));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${mediaQuery.tablet} {
    --fs: 17vw;
    margin: var(--padding-normal) 0 var(--padding-mid) 0;
  }
`;

export const footerColHeaderCss = css`
  font-size: var(--font-size-small);
  color: var(--color-bg-secondary);
  margin-bottom: var(--padding-small);
`;

export const footerIconCss = (color: string) => css`
  color: ${color};
  font-size: var(--font-size-icon);
`;
