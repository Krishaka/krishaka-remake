import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"]
});

export const globalStylesCss = css`
  :root {
    --font-default: ${inter.style.fontFamily};

    --max-width: 1440px;
    --header-height: 8vh;
    --font-size-large: 6.25vw;
    --font-size-med: 2.6rem;
    --font-size-small: 1.2rem;
    --font-size-default: 1rem;
    --font-size-icon: 1.6rem;
    --bor-rad-normal: 25px;
    --bor-rad-small: 10px;
    --padding-normal: 50px;
    --padding-mid: 25px;
    --padding-small: 10px;
    --padding-page-dw: 10vh;
    --padding-page-mw: 5vh;
    --scrollbar-width: 5px;
    --footer-grid-col-width: 275px;
    --banner-img-height: 350px;
    --line-height-extra: 1.5em;

    --color-bg-primary: #1d892c;
    --color-bg-secondary: #ffd93d;
    --color-bg-primary-light: rgb(94, 184, 129);
    --color-bg: #061e06;
    --color-nav-bg: rgba(29, 137, 44, 0.4);
    --color-off-gray: hsla(0, 0%, 63%, 0.25);
    --color-text-default: #fefefe;
    --color-text-dark: #111111;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  #__next {
    font-family: var(--font-default);
    color: var(--color-text-default);
    ${mediaQuery.mobileLandscape} {
      --header-height: 17.5vh;
    }
  }
  body {
    background-color: var(--color-bg);
  }
  ::-webkit-scrollbar {
    width: var(--scrollbar-width);
    background-color: var(--color-bg);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: var(--bor-rad-normal);
    background-color: var(--color-text-default);
  }
`;
