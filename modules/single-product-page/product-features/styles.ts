import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const featuresWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-page-mw);
`;

export const featuresContainerCss = css`
  --col-num: 4;
  display: grid;
  grid-template-columns: repeat(var(--col-num), 1fr);
  gap: var(--padding-mid);
  ${mediaQuery.miniDesktop} {
    --col-num: 2;
  }
  ${mediaQuery.mobile} {
    --col-num: 1;
  }
`;

export const featureItemCss = css`
  border: 2px solid var(--color-bg-primary-light);
  border-radius: var(--bor-rad-small);
  display: flex;
  flex-direction: column;
  padding: var(--padding-mid);
  align-items: center;
  justify-content: center;
  gap: var(--padding-mid);
`;

export const featureTitleCss = css`
  color: var(--color-bg-primary-light);
  font-size: var(--font-size-icon);
`;

export const featureImgCss = css`
  width: 80%;
  aspect-ratio: 1;
  max-width: calc(6 * var(--padding-normal));
  filter: contrast(0.5);
  img {
    object-fit: contain;
  }
`;

export const featureDescCss = css`
  text-align: justify;
  hyphens: auto;
`;
