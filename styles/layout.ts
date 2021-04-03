import { css } from '@emotion/react';

const RESOLUTION_MAX_WIDTH = '900px';
const ADMIN_RESOLUTION_MAX_WIDTH = '1600px';

export const fitInResolution = css`
  max-width: ${RESOLUTION_MAX_WIDTH};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const adminFitInResolution = css`
  max-width: ${ADMIN_RESOLUTION_MAX_WIDTH};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
