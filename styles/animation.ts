import { css, keyframes } from '@emotion/react';

export const wriggle = css`
  animation: ${keyframes`
    0% { transform: rotate(0); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(0); }
  `} 0.5s ease;
`;

export const toastUp = (biasPx: number) => css`
  animation: ${keyframes`
    0% {
      opacity: 0;
      transform: translate(0, ${biasPx}px);
    }
    75% {
      transform: translate(0, -${biasPx / 4}px);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  `} 0.25s;
`;
