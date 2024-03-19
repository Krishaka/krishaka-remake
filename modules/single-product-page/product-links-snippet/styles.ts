import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const productLinksSnippetWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-normal);
  margin: var(--padding-page-dw) 0;
  ${mediaQuery.mobile} {
    gap: var(--bor-rad-normal);
    margin-bottom: var(--padding-normal);
  }
`;

export const productsLinksSnippetHeaderCss = css`
  font-size: var(--font-size-icon);
  font-weight: 600;
`;

export const productLinksSnippetContainerCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mediaQuery.miniDesktop} {
    flex-direction: column;
    gap: var(--padding-page-mw);
  }
`;

export const productLinkSnippetCss = css`
  --text-shift: var(--padding-normal);
  display: flex;
  align-items: center;
  gap: var(--padding-normal);
  width: 49%;
  border-radius: var(--bor-rad-small);
  background-color: var(--color-bg-primary);
  padding: var(--padding-page-mw) 0 var(--padding-page-mw) var(--text-shift);
  text-decoration: none;
  &:nth-of-type(2) {
    padding: var(--padding-page-mw) var(--text-shift) var(--padding-page-mw) 0;
    justify-content: flex-end;
    .product-snippet-info {
      order: -1;
      align-items: flex-end;
    }
  }
  ${mediaQuery.miniDesktop} {
    width: 100%;
  }
  ${mediaQuery.tablet} {
    justify-content: center;
    gap: 15%;
    padding-left: 0;
    padding-right: 0;
    .product-snippet-info {
      align-items: flex-end;
    }
    &:nth-of-type(2) {
      justify-content: center;
      .product-snippet-info {
        align-items: flex-start;
      }
    }
  }
  ${mediaQuery.mobile} {
    flex-direction: column;
    padding: 0;
    padding-top: var(--padding-normal);
    gap: var(--padding-page-mw);
    .product-snippet-info {
      align-items: center;
    }
    &:nth-of-type(2) {
      padding: 0;
      padding-top: var(--padding-normal);
      .product-snippet-info {
        order: 0;
        align-items: center;
      }
    }
  }
`;

export const productSnippetImgContainerCss = css`
  height: calc(var(--padding-page-dw) + var(--padding-page-mw));
  border-radius: var(--scrollbar-width);
  aspect-ratio: 1;
  transform: rotate(45deg);
  overflow: hidden;
  ${mediaQuery.tablet} {
    height: calc(var(--padding-page-dw));
  }
  ${mediaQuery.mobile} {
    height: calc(3 * var(--padding-normal));
  }
`;

export const productSnippetImgCss = css`
  height: 150%;
  aspect-ratio: 1;
  transform: rotate(-45deg) translateY(-25%);
  img {
    object-fit: cover;
  }
`;

export const productSnippetTextWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--bor-rad-small);
  color: var(--color-text-default);
  .prod-snippet-generic-text {
    font-weight: 600;
    font-size: var(--font-size-small);
  }
  .prod-snippet-product-name {
    color: var(--color-bg-secondary);
    font-size: var(--font-size-med);
    text-transform: capitalize;
    font-weight: 600;
  }
  ${mediaQuery.tablet} {
    .prod-snippet-product-name {
      font-size: var(--font-size-icon);
    }
  }
  ${mediaQuery.mobile} {
    text-align: center;
    margin-bottom: var(--bor-rad-normal);
  }
`;
