import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const itemCounterCss = css`
  display: none;
  ${mediaQuery.miniDesktop} {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    text-align: center;
    color: var(--color-bg-secondary);
    font-size: var(--font-size-small);
    margin: 0 auto;
  }
`;

export const numCarousalWrapperCss = (num: string) => css`
  --font-width: ${num};
  width: var(--font-width);
  padding: 10px 0;
  display: flex;
  overflow-x: scroll;
  touch-action: none;
  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const numItemCss = css`
  width: var(--font-width);
  flex-shrink: 0;
`;
