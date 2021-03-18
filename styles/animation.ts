import { css, keyframes } from '@emotion/react';

export const wriggle = css`
  animation: ${keyframes`
    0% { transform: rotate(0); }
    50% { transform: rotate(10deg); }
    100% { transform: rotate(0); }
  `} 0.5s ease;
`;
