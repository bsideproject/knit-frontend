import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { TextInputProps } from './TextInput';
import AtomInput from './Input';

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
      background-color: ${theme.palette.danger};
    `;
  }

  return css`
    background-color: ${theme.palette.primary};
  `;
};

export const BorderLine = styled.div`
  height: 0px;
  width: 0px;
  left: 0px;
  display: inline-block;
  transition: 0.3s width ease-in-out;
  position: absolute;
  bottom: 0px;
  ${colorStyles}
`;

export const Wrapper = styled.div<TextInputProps>`
  width: 100%;
  position: relative;

  & > input {
    outline: none;
    box-sizing: border-box;
    border-bottom: 1px solid ${({ error, theme }) => (error ? theme.palette.danger : `#a09db1`)};

    &:active,
    &:focus {
      border-bottom: 1px solid #a09db1;

      & + div {
        width: 100%;
        height: 1px;
      }
    }
  }
`;
export const Input = styled(AtomInput)``;
