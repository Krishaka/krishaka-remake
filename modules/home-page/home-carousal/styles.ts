import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const homeCarousalCss = css`
  margin-bottom: var(--padding-page-dw);
  user-select: none;
`;

export const carousalWrapperCss = css`
  display: flex;
  align-items: center;
  margin-top: var(--padding-normal);
  justify-content: space-between;
  ${mediaQuery.miniDesktop} {
    justify-content: center;
  }
`;

export const carousalContainerCss = css`
  overflow-x: scroll;
  width: fit-content;
  margin: 0 var(--padding-mid);
  ::-webkit-scrollbar {
    background-color: var(--color-off-gray);
    height: 1px;
  }
  ${mediaQuery.miniDesktop} {
    width: var(--carosual-mid-width);
    ::-webkit-scrollbar {
      height: 0px;
    }
  }
  ${mediaQuery.tablet} {
    width: 60vw;
    margin: 0 var(--padding-small);
  }
  ${mediaQuery.mobile} {
    width: 70vw;
    margin: 0 var(--scrollbar-width);
  }
`;

export const carousalTrackCss = (colNum: number) => css`
  --items-on-screen: 2;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(${colNum}, 1fr);
  width: calc(${colNum} * (100% / var(--items-on-screen)));
  margin-bottom: var(--padding-normal);
  ${mediaQuery.miniDesktop} {
    --items-on-screen: 1;
  }
`;

export const carousalArrowCss = css`
  font-size: var(--padding-normal);
  cursor: pointer;
  ${mediaQuery.mobile} {
    font-size: var(--font-size-icon);
  }
  &.arrow-inactive {
    cursor: not-allowed;
    opacity: 0.25;
  }
`;

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
  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const numItemCss = css`
  width: var(--font-width);
  flex-shrink: 0;
`;
