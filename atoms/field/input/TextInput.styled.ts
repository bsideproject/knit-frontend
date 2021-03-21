import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import * as font from '~/styles/font';

import { Props as InputProps } from './Input';

export interface TextInputProps extends InputProps {}

const colorStyles = ({ theme, error, disabled }: TextInputProps & { theme: Theme }) => {
  if (disabled) {
    return css`
      border-bottom: 1px solid #e2e1eb;
      background: ${theme.palette.white};
      color: #818189;
      &:hover {
        cursor: not-allowed;
      }
    `;
  }

  if (error) {
    return css`
      border-bottom: 1px solid ${theme.palette.danger};
    `;
  }

  // Todo filled state check when typing

  return css`
    border-bottom: 1px solid #a09db1;
    &:hover {
      border-bottom: 1px solid #818189;
    }
    &:focus,
    &:active {
      caret-color: ${theme.palette.primary};
      border-bottom: 1px solid ${theme.palette.primary};
      box-sizing: border-box;
    }
  `;
};

export const Wrapper = styled.div`
  & > input {
    padding: 7px;
    border: 0px;
    outline: none;
    box-sizing: border-box;

    ${font.set(14)} //Todo fix fontSize
    ${colorStyles}
  }
`;
