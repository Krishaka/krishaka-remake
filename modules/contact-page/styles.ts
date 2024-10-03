import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const contactPageWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-normal);
  padding: var(--padding-page-dw) 0;
  ${mediaQuery.mobile} {
    padding: var(--padding-page-mw) 0;
  }
`;

export const formWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-normal);
  max-width: 600px;
  width: 100%;
  
  label {
    font-weight: 600;
    font-size: var(--font-size-default);
    color: var(--color-text-default);
  }
  
  input, textarea {
    margin-top: 10px;
    padding: var(--padding-small);
    border: 1px solid var(--color-light-gray);
    border-radius: var(--bor-rad-small);
    font-size: var(--font-size-default);
    width: 100%;
    box-sizing: border-box;
    background-color: #BEDC74;
    color: var(--color-text-dark);
  }
  
  textarea {
    min-height: 150px;
  }

  input:focus, textarea:focus {
    outline: 2px solid var(--color-bg-primary);
  }

  button {
    max-width: 350px;
    min-width: 90px;
    margin: auto;
    padding: 10px;
    background-color: var(--color-bg-primary);
    color: var(--color-text-default);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: var(--font-size-small);
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--color-bg-secondary);
      color: black;
    }
  }

  p {
    color: var(--color-bg-secondary);
    font-size: var(--font-size-small);
    margin-top: var(--padding-small);
  }
`;
export const joinButtonCss = css`
  display: block;
  margin: 0 auto;
  padding: 12px 24px;
  background-color: var(--color-bg-primary);
  color: var(--color-text-default);
  border: none;
  border-radius: 50px;
  font-size: var(--font-size-default);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: var(--color-bg-secondary);
    color: var(--color-text-dark);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 2px solid var(--color-bg-primary);
  }
`;
