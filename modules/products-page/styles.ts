import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const productsContainerCss = css`
  --grid-col: 2;
  --padding: var(--padding-page-dw);
  display: grid;
  place-items: center;
  grid-template-columns: repeat(var(--grid-col), 1fr);
  row-gap: var(--padding);
  margin-bottom: var(--padding);
  ${mediaQuery.tablet} {
    --grid-col: 1;
    --padding: var(--padding-page-mw);
  }
`;
