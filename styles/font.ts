import { CSSProperties } from 'react';
import { css } from '@emotion/react';

export const fontFamily = 'Noto Sans KR';

export const set = (
  fontSize: CSSProperties['fontSize'],
  fontWeight: CSSProperties['fontWeight'] = 'normal'
) => {
  return css`
    font-size: ${fontSize}px;
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    font-style: normal;
    text-decoration: none;
  `;
};

export const ellipse = (line = 1) => {
  if (line === 1) {
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    `;
  }

  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${line};
  `;
};
