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
  ${mediaQuery.tablet} {
    position: relative;
  }
`;

export const carousalArrowCss = css`
  font-size: var(--padding-normal);
  cursor: pointer;
  ${mediaQuery.tablet} {
    position: absolute;
    z-index: 2;
    top: 35%;
    color: var(--color-bg-secondary);

    &:nth-of-type(1) {
      left: var(--padding-small);
    }
    &:nth-of-type(2) {
      right: var(--padding-small);
    }
  }
  ${mediaQuery.mobile} {
    font-size: calc(1.5 * var(--padding-mid));
  }
  &.arrow-inactive {
    cursor: not-allowed;
    opacity: 0.25;
  }
  ${mediaQuery.mobileLandscape} {
    font-size: var(--padding-mid);
  }
`;
