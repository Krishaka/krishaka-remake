import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const tlWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-page-mw);
`;

export const tlGraphWrapperCss = css`
  position: relative;
  --tl-item-height: 400px;
  --left-val: 50%;
  --line-width: 4px;
  &::before {
    position: absolute;
    content: "";
    height: calc(100% - var(--tl-item-height));
    width: var(--line-width);
    background-color: var(--color-text-default);
    left: var(--left-val);
    transform: translateX(-50%);
    top: var(--padding-mid);
  }
  ${mediaQuery.miniDesktop} {
    --tl-item-height: 500px;
  }
  ${mediaQuery.tablet} {
    --left-val: 0;
  }
  ${mediaQuery.mobile} {
    &::before {
      width: var(--scrollbar-width);
      height: 80%;
    }
  }
`;

export const tlItemCss = css`
  height: var(--tl-item-height);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  &:nth-of-type(even) {
    .tl-info {
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .tl-item-desc {
        text-align: right;
      }
    }
  }
  ${mediaQuery.tablet} {
    justify-content: flex-start;
    height: fit-content;
    margin-bottom: 5vh;
    &:nth-of-type(even) {
      .tl-info {
        align-items: flex-start;
        left: calc(2 * var(--padding-mid));
        .tl-item-desc {
          text-align: right;
        }
      }
    }
  }
`;

export const tlCheckpointCss = css`
  height: var(--line-height-large);
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--color-text-default);
  transition: all 0.15s ease;
  margin-top: var(--padding-mid);
  ${mediaQuery.tablet} {
    position: absolute;
    height: calc(var(--bor-rad-small) + var(--scrollbar-width));
    left: 0;
    transform: translateX(-50%);
  }
  ${mediaQuery.mobile} {
    height: var(--padding-mid);
  }
  &.checkpoint-active {
    background-color: var(--color-bg-secondary);
  }
`;

export const tlInfoWrapperCss = css`
  --card-width: 46%;
  position: absolute;
  width: var(--card-width);
  right: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-mid);
  background-color: var(--color-text-default);
  color: var(--color-text-dark);
  border-radius: var(--bor-rad-small);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  ${mediaQuery.tablet} {
    --card-width: 95%;
    position: static;
    height: fit-content;
    transform: translateX(var(--padding-mid));
  }
  ${mediaQuery.mobile} {
    padding: var(--bor-rad-small);
    --card-width: 93%;
    transform: translateX(var(--padding-mid));
  }
  &.item-active {
    opacity: 1;
  }
`;

export const tlItemTitleCss = css`
  font-size: var(--font-size-icon);
  color: var(--color-bg-primary);
`;

export const tlItemDateCss = css`
  margin: var(--padding-small) 0 var(--padding-mid) 0;
  font-weight: 600;
  ${mediaQuery.mobile} {
    margin: 0;
    margin-bottom: var(--scrollbar-width);
  }
`;

export const tlItemDescCss = css`
  line-height: var(--line-height-large);
  ${mediaQuery.mobile} {
    --line-height-large: 22.5px;
  }
`;
