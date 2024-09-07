import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const teamMemberCardCss = css`
  border: 1px solid var(--color-off-gray);
  text-decoration: none;
  color: inherit;
  padding: var(--padding-mid);
  border-radius: var(--bor-rad-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQuery.mobile} {
    border-radius: var(--bor-rad-small);
    padding: var(--padding-mid);
  }
  ${mediaQuery.mobileLandscape} {
    display: flex;
    align-items: center;
    gap: var(--padding-normal);
  }
`;

export const memberProfileImgCss = css`
  --img-size: 15vw;
  border-radius: 50%;
  overflow: hidden;
  width: var(--img-size);
  aspect-ratio: 1;
  img {
    object-fit: cover;
  }
  ${mediaQuery.miniDesktop} {
    --img-size: 150px;
  }
`;

export const memberInfoContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-small);
  padding: var(--padding-mid) 0;
  .member-name {
    font-size: var(--font-size-icon);
    color: var(--color-bg-secondary);
    text-align: center;
  }
  .member-position {
    text-align: center;
  }
  ${mediaQuery.mobile} {
    .member-name {
      font-size: var(--font-size-small);
    }
  }
  ${mediaQuery.mobileLandscape} {
    .member-name {
      font-size: var(--font-size-small);
    }
  }
`;

export const memberSocialsWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  .member-social-link {
    text-decoration: none;
    color: var(--color-bg-secondary);
    svg {
      font-size: var(--font-size-icon);
    }
  }
`;
