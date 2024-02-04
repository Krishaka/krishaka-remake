import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const aboutDescHeaderCss = css`
  color: var(--color-bg-secondary);
  font-size: var(--font-size-med);
  font-weight: 600;
  margin-bottom: var(--padding-small);
  ${mediaQuery.mobile} {
    font-size: var(--font-size-icon);
  }
`;
