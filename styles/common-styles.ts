import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const commonPageWrapperCss = css`
  --pad-top: var(--padding-page-dw);
  padding: var(--pad-top) 0;
  ${mediaQuery.tablet} {
    --pad-top: var(--padding-page-mw);
  }
  ${mediaQuery.mobileLandscape} {
    --pad-top: var(--padding-page-dw);
  }
  &.page {
    margin-top: var(--header-height);
  }
`;

export const commonPageContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-normal);

  ${mediaQuery.mobileLandscape} {
    gap: var(--padding-mid);
  }
  ${mediaQuery.mobile} {
    gap: var(--padding-mid);
  }
`;

export const commonHeaderCss = (color?: string) => css`
  color: ${color ? color : "var(--color-bg-secondary)"};
  font-size: var(--font-size-med);
  font-weight: 600;
  margin-bottom: var(--padding-small);
  ${mediaQuery.mobile} {
    font-size: var(--font-size-icon);
  }
  ${mediaQuery.mobileLandscape} {
    font-size: var(--font-size-icon);
  }
`;
