import { keyframes } from '@emotion/react';

export const wriggle = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0);
  }
`;
