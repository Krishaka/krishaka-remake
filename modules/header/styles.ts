import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const headerWrapperCss = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  transition: all 0.3s ease;
  border-radius: 0 0 var(--bor-rad-normal) var(--bor-rad-normal);
  &.header-active {
    backdrop-filter: blur(10px);
    background-color: var(--color-nav-bg);
  }
  ${mediaQuery.tablet} {
    border-bottom: 1px solid var(--color-off-gray);
  }
  ${mediaQuery.mobileLandscape} {
    --header-height: 17.5vh;
  }
`;

export const headerCss = css`
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const hamburgerCss = css`
  ${mediaQuery.tablet} {
    --nav-height: 17.5px;
    --nav-width: 30px;
    --hamburger-line-height: 2px;
    height: var(--nav-height);
    width: var(--nav-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    &.hamburger-active {
      .hamburger-lines {
        &:nth-of-type(1) {
          top: 50%;
          transform: translate(0, -50%) rotate(45deg);
        }
        &:nth-of-type(2) {
          opacity: 0;
        }
        &:nth-of-type(3) {
          bottom: 50%;
          transform: translate(0, 50%) rotate(-45deg);
        }
      }
    }
    .hamburger-lines {
      width: 100%;
      height: var(--hamburger-line-height);
      background-color: white;
      border-radius: 1em;
      transition: all 0.3s ease;
      transform-origin: center;
      position: absolute;
      &:nth-of-type(1) {
        top: 0;
      }
      &:nth-of-type(2) {
        top: 50%;
        transform: translate(0, -50%);
      }
      &:nth-of-type(3) {
        bottom: 0;
      }
    }
  }
`;

export const navCss = css`
  display: flex;
  align-items: center;
  gap: 5vw;
  ${mediaQuery.tablet} {
    --nav-height: 275px;
    position: absolute;
    gap: 0;
    height: var(--nav-height);
    width: 90%;
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-off-gray);
    border-radius: var(--bor-rad-small);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    bottom: 100%;
    transition: bottom 0.3s ease;
    z-index: -1;
    &.nav-active {
      bottom: calc(-1 * var(--nav-height) - 10px);
    }
    ${mediaQuery.mobileLandscape} {
      --nav-height: 75vh;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
    }
  }
`;

export const navItemCss = css`
  text-decoration: none;
  color: var(--color-text-default);
  font-size: var(--font-size-small);
  font-weight: 600;
  text-transform: capitalize;
  outline: none;
`;
