import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const productNameHeaderCss = css`
  text-transform: capitalize;
  padding-bottom: var(--padding-normal);
  border-bottom: 1px solid var(--color-light-gray);
  ${mediaQuery.tablet} {
    padding-bottom: var(--padding-mid);
  }
`;

export const productDescContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
  .prod-page-desc {
    ${mediaQuery.tablet} {
      text-align: justify;
      height: auto;
    }
  }
`;
