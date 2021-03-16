import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as font from '~/styles/font';
import { Theme, Size } from '~/@types';

/* 
  (@Comment) 글로벌로 색상을 주기보다 
  컴포넌트 별 색깔 상이 가능성 존재
  custom inline color 적용
*/
// type ThemeTest = typeof test;

// type StyledProps = IButton & { theme: Theme };

// interface IButton extends Pick<ITheme, 'theme'> {

const ButtonSize = ({ size }: IButton) => {
  let cssSize;
  switch (size) {
    case Size.SMALL:
      cssSize = css`
        height: 29px;
        ${font.set(11)};
      `;
      break;

    case Size.MIDDLE:
      cssSize = css`
        height: 36px;
        ${font.set(13)};
      `;
      break;
    case Size.LARGE:
      cssSize = css`
        height: 46px;
        ${font.set(15)};
      `;
      break;

    default:
      break;
  }
  return cssSize;
};

interface IButton {
  size: Size;
  typea?: Theme;
  theme?: any;
}
const colorStyles = () => {
  // console.log(theme.)
  // const selected = theme.palette[color];
  return false;
};
export const Button = styled.button`
  width: 114px;
  height: 38px;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 20px;
  border-radius: 4px;

  /* Size */
  ${ButtonSize} /* Color */

  ${colorStyles}
`;
