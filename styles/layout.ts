import { css } from '@emotion/react';

const RESOLUTION_MAX_WIDTH = '900px';

export const fitInResolution = css`
  max-width: ${RESOLUTION_MAX_WIDTH};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
