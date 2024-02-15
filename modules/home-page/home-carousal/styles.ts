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
  ${mediaQuery.mobileLandscape} {
    font-size: var(--padding-mid);
  }
`;
