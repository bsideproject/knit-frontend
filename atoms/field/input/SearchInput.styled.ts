import styled from '@emotion/styled';
import * as font from '~/styles/font';
import { SearchIcon } from '~/public/assets/icon';
import { theme } from '~/styles';

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
  border: 1px solid ${theme.palette.primary};
  background: #ffffff;

  ${font.set(14)}

  outline: none;

  ::placeholder {
    ${font.set(14)}
    color: #a8a8a8;
  }
  :focus::placeholder {
    opacity: 0;
  }
`;

export const SearchButton = styled(SearchIcon)`
  position: absolute;
  right: 15px;
  padding: 0;
  background: transparent;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 88%;
  }
`;
