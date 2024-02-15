import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

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
  ${mediaQuery.mobileLandscape} {
    width: 90vw;
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
