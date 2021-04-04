import { css } from '@emotion/react';

const RESOLUTION_MAIN_MAX_WIDTH = '1280px';
const RESOLUTION_PAGE_MAX_WIDTH = '800px';
const ADMIN_RESOLUTION_MAX_WIDTH = '1600px';

export const fitInResolutionOnMain = css`
  max-width: ${RESOLUTION_MAIN_MAX_WIDTH};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const fitInResolutionOnPage = css`
  max-width: ${RESOLUTION_PAGE_MAX_WIDTH};
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
