import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const homeTeamWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-normal);
  padding: var(--padding-page-dw) 0;
  ${mediaQuery.mobile} {
    padding: var(--padding-page-mw) 0;
  }
`;

export const teamMembersContainerCss = css`
  --grid-col: 3;
  display: grid;
  grid-template-columns: repeat(var(--grid-col), 1fr);
  gap: var(--padding-normal);
  ${mediaQuery.miniDesktop} {
    --grid-col: 2;
  }
  ${mediaQuery.tablet} {
    --grid-col: 1;
  }
  ${mediaQuery.mobileLandscape} {
    --grid-col: 1;
  }
`;
