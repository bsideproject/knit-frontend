import { css } from '@emotion/react';

const RESOLUTION_MAX_WIDTH_MAIN = '1280px';
const RESOLUTION_MAX_WIDTH_PAGE = '800px';
const RESOLUTION_MAX_WIDTH_ADMIN = '1600px';

export const fitInResolutionOnMain = css`
  max-width: ${RESOLUTION_MAX_WIDTH_MAIN};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const fitInResolutionOnPage = css`
  max-width: ${RESOLUTION_MAX_WIDTH_PAGE};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const fitInResolutionOnAdmin = css`
  max-width: ${RESOLUTION_MAX_WIDTH_ADMIN};
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
