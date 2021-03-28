import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  position: relative;
  width: 250px;
  height: 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-right: 60px;
  padding-left: 20px;

  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #81007f;
  background: #ffffff;

  ${font.set(18)}

  outline: none;

  ::placeholder {
    ${font.set(16)}
    color: #a8a8a8;
  }
  :focus::placeholder {
    opacity: 0;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;

  padding: 0;
  height: 100%;
  width: 60px;

  background: transparent;

  border: none;
  outline: none;

  cursor: pointer;
`;
