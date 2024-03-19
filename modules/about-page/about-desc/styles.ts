import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const aboutDescCss = css`
  line-height: var(--line-height-large);
  ${mediaQuery.tablet} {
    hyphens: auto;
    text-align: justify;
  }
`;
