import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

export interface TextareaProps {
  description?: string;
  error?: boolean;
  disabled?: boolean;
}

const colorStyles = ({ theme, error, disabled }: TextareaProps & { theme: Theme }) => {
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
      &:hover,
      &:focus,
      &:active {
        border-bottom: 1px solid ${theme.palette.danger};
      }
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

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  border-style: none;
  border-color: Transparent;
  overflow: auto;
  outline: none;
  overflow-y: hidden;
  resize: none;
  min-height: 30px;
  height: 30px;

  ${colorStyles}/* &:active,
  &:focus {
    border-bottom: 1px solid #a09db1;

    & + div {
      width: 100%;
      height: 2px;
    }
  } */
`;
