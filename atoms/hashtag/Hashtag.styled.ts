import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as font from '~/styles/font';
import { Theme } from '~/@types';

type ColorMode = 'light' | 'dark';
export interface AnchorProps {
  colorMode: ColorMode;
}

const border = ({ colorMode, theme }: { colorMode: ColorMode; theme: Theme }) => {
  if (colorMode === 'light') {
    return css`
      border: 1px solid ${theme.palette.grey};
    `;
  }
  return css``;
};

const background = ({ colorMode }: { colorMode: ColorMode }) => {
  if (colorMode === 'dark') {
    return css`
      background: rgba(255, 255, 255, 0.3);
    `;
  }
  return css``;
};

const color = ({ colorMode, theme }: { colorMode: ColorMode; theme: Theme }) => {
  if (colorMode === 'light') {
    return css`
      color: ${theme.palette.darkGrey};
    `;
  }
  if (colorMode === 'dark') {
    return css`
      color: rgba(0, 0, 0, 0.7);
    `;
  }
  return css``;
};

export const Anchor = styled.a<AnchorProps>`
  padding: 4px 10px;

  display: inline-block;

  ${font.set(14)}
  ${color}
  ${background}
  ${border}
  border-radius: 30px;
`;
