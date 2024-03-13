import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const notFoundContainerCss = css`
  align-items: center;
`;

export const notFoundHeadingCss = css`
  font-size: var(--font-size-icon);
  color: var(--color-bg-secondary);
  font-weight: 600;
`;

export const notFoundParaCss = css`
  width: var(--carosual-mid-width);
  text-align: center;
  ${mediaQuery.tablet} {
    width: 100%;
  }
`;
