import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import * as font from '~/styles/font';
import { Color, Size } from '~/@types';

interface IButton {
  size: Size;
  color: Color;
}
const ButtonSize = ({ size }: IButton) => {
  let cssSize;
  switch (size) {
    case Size.XSMALL:
      cssSize = css`
        height: 26px;
        ${font.set(12)};
      `;
      break;

    case Size.SMALL:
      cssSize = css`
        height: 32px;
        ${font.set(14)};
      `;
      break;
    case Size.MIDDLE:
      cssSize = css`
        height: 40px;
        ${font.set(16)};
      `;
      break;
    case Size.LARGE:
      cssSize = css`
        height: 48px;
        ${font.set(20)};
      `;
      break;

    default:
      break;
  }
  return cssSize;
};

const colorStyles = ({ theme, color }: IButton & { theme: Theme }) => {
  let cssColor;
  const background = theme.palette[color];
  switch (color) {
    case Color.PRIMARY:
      cssColor = css`
        background: ${background};
        color: ${theme.palette.white};
      `;
      break;
    case Color.SECONDARY:
      cssColor = css`
        background: ${background};
        color: ${theme.palette.primary};
      `;
      break;
    case Color.TERTIARY:
      cssColor = css`
        background: ${background};
        color: ${theme.palette.primary};
      `;
      break;
    case Color.QUATENARY:
      cssColor = css`
        background: ${background};
        color: ${theme.palette.primary};
      `;
      break;
    default:
      break;
  }
  return cssColor;
};
export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 20px;
  border-radius: 4px;

  /* Size */
  ${ButtonSize}

  /* Color */
  ${colorStyles}
`;
