import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import CreatableSelectAtom from 'react-select/creatable';
import { SelectInputProps } from './SelectInput';
import { theme } from '~/styles';

const colorStyles = ({ theme, error, disabled }: SelectInputProps & { theme: Theme }) => {
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

  return css`
    /* border: 0px; */
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
`;

export const CreatableSelect = styled(CreatableSelectAtom)`
  & > div:first-of-type {
    border: 0px;
    border-radius: 0px;
    box-shadow: none;
    ${colorStyles}
  }
  & > div:last-of-type > div > div {
    background-color: unset;
    color: ${theme.palette.black};
    &:hover,
    &:active,
    &:focus {
      background: #f3f2f5;
    }
  }

  /* .react-select-container {
    background: red;
  } */
`;
