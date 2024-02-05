import { css } from "@emotion/react";

export const homeBannerContainerCss = css`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const homeBannerCss = css`
  height: 100vh;
  width: 100%;
  filter: brightness(0.3) saturate(2);
  position: absolute;
  inset: 0;
  z-index: -1;
  img {
    object-fit: cover;
  }
`;

export const bannerProductsImgCss = css`
  height: 110%;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  img {
    object-fit: contain;
  }
`;

export const mainCss = css`
  display: flex;
  flex-direction: column;
`;

export const bannerHeaderCss = css`
  font-size: var(--font-size-large);
  color: var(--color-bg-secondary);
`;

export const homeBannerBriefCss = css`
  width: 40%;
  font-weight: 400;
  margin-bottom: var(--padding-normal);
  line-height: var(--line-height-extra);
  font-size: var(--font-size-icon);
`;

export const bannerCtaContainerCss = css`
  display: flex;
  gap: var(--padding-mid);
  align-items: center;
  .cta-info {
    font-size: var(--font-size-icon);
  }
`;

export const bannerCtaBtnCss = css`
  font-size: var(--font-size-small);
`;
