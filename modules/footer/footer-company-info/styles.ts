import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const footerCompanyInfoWrapperCss = css`
  margin-bottom: var(--padding-normal);
`;

export const footerCompanyIDCss = css`
  display: flex;
  align-items: center;
  margin-bottom: var(--padding-small);
`;

export const footerCompanyIDNameCss = css`
  font-size: var(--font-size-med);
  font-weight: 600;
  color: var(--color-bg-secondary);
  margin-left: var(--padding-small);
  ${mediaQuery.mobile} {
    font-size: var(--font-size-icon);
  }
  ${mediaQuery.mobileLandscape} {
    font-size: var(--font-size-icon);
  }
`;

export const footerTaglineCss = css`
  display: flex;
  font-size: var(--font-size-default);
  font-weight: 400;
`;

export const footerSocialsHeaderCss = css`
  color: var(--color-bg-secondary);
  display: flex;
  margin-bottom: var(--padding-small);
`;

export const footerSocialsWrapperCss = css`
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 300px;
`;
