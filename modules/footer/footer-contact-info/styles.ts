import { css } from "@emotion/react";

export const footerContactInfoWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
`;

export const footerContactLinkCss = css`
  display: flex;
  align-items: center;
  gap: var(--padding-small);
  text-decoration: none;
`;

export const footerContactLinkTextCss = css`
  width: 80%;
  color: var(--color-text-default);
`;
