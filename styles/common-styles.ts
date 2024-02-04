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
