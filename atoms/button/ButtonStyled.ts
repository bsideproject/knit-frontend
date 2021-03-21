import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { MouseEventHandler } from 'react';
import * as font from '~/styles/font';
import { Color, Size } from '~/@types';

export interface ButtonProps {
  color: Color;
  size: Size;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = ({ size }: ButtonProps) => {
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

const colorStyles = ({ theme, color, disabled }: ButtonProps & { theme: Theme }) => {
  let cssColor;
  const background = theme.palette[color];

  switch (color) {
    case Color.PRIMARY:
      cssColor = css`
        background: ${background};
        color: ${theme.palette.white};
        &:hover {
          // 이런 color 들도 theme 로 설정 할건지?
          background: #8550d8;
        }
        &:active {
          background: #4708aa;
        }
      `;
      if (disabled) {
        cssColor = css`
          background: #a09db1;
          color: ${theme.palette.white};
        `;
      }

      break;
    case Color.SECONDARY:
      cssColor = css`
        border: 1px solid #5c16cb;
        background: ${background};
        color: ${theme.palette.primary};
      `;

      if (disabled) {
        cssColor = css`
          background: #dddddd;
          border: 1px solid #a09db1;
          color: #a09db1;
        `;
      }
      break;
    case Color.TERTIARY:
      cssColor = css`
        background: ${background};
        color: ${theme.palette.primary};
      `;
      if (disabled) {
        cssColor = css`
          background: #dddddd;
          color: #a09db1;
        `;
      }
      break;
    case Color.QUATENARY:
      cssColor = css`
        background: ${background};
        color: ${theme.palette.primary};
      `;
      if (disabled) {
        cssColor = css`
          background: ${background};
          color: #a09db1;
        `;
      }
      break;
    default:
      break;
  }
  return cssColor;
};
export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  cursor: pointer;

  border-radius: 4px;

  /* Size */
  ${ButtonSize}

  /* Color */
  ${colorStyles}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;
