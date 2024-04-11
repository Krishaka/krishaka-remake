import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const homeBannerWrapperCss = css`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  ${mediaQuery.tablet} {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const homeBannerContainerCss = css`
  display: flex;
  align-items: center;
  ${mediaQuery.tablet} {
    flex-direction: column;
  }
`;

export const homeBannerImgCss = css`
  height: 100vh;
  width: 100%;
  filter: brightness(0.3) saturate(2);
  position: absolute;
  inset: 0;
  z-index: -2;
  img {
    object-fit: cover;
  }
`;

export const bannerProductsImgCss = css`
  --img-height: 100px;
  height: var(--img-height);
  aspect-ratio: 1;
  scale: 11;
  transform-origin: left;
  img {
    object-fit: contain;
  }
  ${mediaQuery.miniDesktop} {
    --img-height: 65vh;
    scale: 1.5;
  }
  ${mediaQuery.tablet} {
    order: -1;
    position: static;
    --img-height: 50vh;
    scale: 1;
    transform: translate(-10%, -10vw) scale(1.2);
  }
  ${mediaQuery.mobileLandscape} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    height: 140%;
  }
`;

export const mainCss = css`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 50%;
  flex-shrink: 0;
  ${mediaQuery.miniDesktop} {
    width: 60%;
  }
  ${mediaQuery.tablet} {
    width: 100%;
    margin-bottom: var(--padding-page-mw);
  }
`;

export const bannerHeaderCss = css`
  font-size: var(--font-size-large);
  color: var(--color-bg-secondary);
  ${mediaQuery.tablet} {
    text-align: center;
    --font-size-large: 12.5vw;
  }
  ${mediaQuery.mobileLandscape} {
    --font-size-large: 6.25vw;
    text-align: left;
  }
`;

export const homeBannerBriefCss = css`
  font-weight: 400;
  margin-bottom: var(--padding-normal);
  line-height: var(--line-height-small);
  font-size: var(--font-size-icon);
  ${mediaQuery.tablet} {
    width: 100%;
    font-size: var(--font-size-small);
    text-align: center;
  }
  ${mediaQuery.mobileLandscape} {
    font-size: var(--font-size-default);
    text-align: left;
    width: 60%;
    margin-bottom: var(--padding-small);
  }
`;

export const bannerCtaContainerCss = css`
  display: flex;
  gap: var(--padding-mid);
  align-items: center;
  .cta-info {
    font-size: var(--font-size-icon);
  }
  ${mediaQuery.tablet} {
    flex-direction: column;
    gap: var(--bor-rad-small);
    .cta-info {
      text-align: center;
      font-size: var(--font-size-small);
    }
  }
  ${mediaQuery.mobileLandscape} {
    gap: 0;
    flex-direction: row;
    .cta-info {
      font-size: var(--font-size-default);
    }
  }
`;

export const spanContainerStyle = css`
  height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const spanStyle = css`
  display: block;
  font-weight: 700;
  min-height: 100%;
  font-size: calc(2 * var(--font-size-default));
  width: 100%;
  display: flex;
  letter-spacing: 0.1em;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  animation: slide-up 10s ease-in-out infinite;
  animation-fill-mode: backwards;
  @keyframes slide-up {
    0% {
      transform: translateY(0);
    }
    15% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-100%);
    }
    40% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(-200%);
    }
    65% {
      transform: translateY(-200%);
    }
    75% {
      transform: translateY(-300%);
    }
    90% {
      transform: translateY(-300%);
    }
    100% {
      transform: translateY(-400%);
    }
  }
  ${mediaQuery.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-icon);
  }
`;
