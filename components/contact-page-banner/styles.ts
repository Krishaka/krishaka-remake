import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const contactPageBannerCss = css`
  padding: var(--padding-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-mid);
  border-radius: var(--bor-rad-normal);
  background-color: var(--color-bg-primary);
  ${mediaQuery.mobile} {
    padding: var(--padding-mid);
    border-radius: var(--bor-rad-small);
  }
  ${mediaQuery.mobileLandscape} {
    padding: var(--padding-mid);
    border-radius: var(--bor-rad-small);
  }
`;
