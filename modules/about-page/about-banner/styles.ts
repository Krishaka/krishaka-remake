import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const aboutBannerCss = css`
  width: 100%;
  height: var(--banner-img-height);
  border-radius: var(--bor-rad-normal);
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: top;
  }
  ${mediaQuery.mobile} {
    --banner-img-height: 275px;
    border-radius: var(--bor-rad-small);
  }
  ${mediaQuery.mobileLandscape} {
    --banner-img-height: 40vh;
    border-radius: var(--bor-rad-small);
  }
`;
