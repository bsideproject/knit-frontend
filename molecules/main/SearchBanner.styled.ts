import styled from '@emotion/styled';
import * as font from '~/styles/font';

import SearchInputAtom, { Props as SearchInputAtomProps } from '~/atoms/field/input/SearchInput';
import { Input } from '~/atoms/field/input/SearchInput.styled';
import { Tag as TagAtom } from '~/atoms/tag';

export const Container = styled.div`
  // height: 280px;
  background: linear-gradient(270deg, #7800ef 0.01%, #27edd5 100%), #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 5%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    // height: 204px;
    padding: 20px 22px 35px;
  }
`;

export const HamburgerButton = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    width: 20px;
    height: 20px;
    align-self: flex-end;
    // margin-right: 22px;
    background: url("data:image/svg+xml,%3Csvg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.2 0H0.8C0.358172 0 0 0.358172 0 0.8V1.2C0 1.64183 0.358172 2 0.8 2H19.2C19.6418 2 20 1.64183 20 1.2V0.8C20 0.358172 19.6418 0 19.2 0Z' fill='white'/%3E%3Cpath d='M19.2 8H0.8C0.358172 8 0 8.35817 0 8.8V9.2C0 9.64183 0.358172 10 0.8 10H19.2C19.6418 10 20 9.64183 20 9.2V8.8C20 8.35817 19.6418 8 19.2 8Z' fill='white'/%3E%3Cpath d='M0 17C0 16.4477 0.447715 16 1 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H1C0.447716 18 0 17.5523 0 17Z' fill='white'/%3E%3C/svg%3E%0A")
      no-repeat;
  }
`;

export const Headline = styled.div`
  ${font.set(42, 'bold')}
  color: white;
  margin: 63px 0 28px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 15px 0 19px 3px;
    align-self: flex-start;
  }
`;

export const HeaderFirst = styled.div`
  ${font.set(42, 'bold')}
  color: #FFFFFF;
  line-height: 52px;
  margin-right: 8px;
  @media only screen and (max-width: 768px) {
    ${font.set(18, 'normal')}
    line-height: 24px;
  }
`;

export const HeaderKnit = styled.div`
  ${font.set(42, 'bold')}
  color: #FFFFFF;
  line-height: 52px;

  @media only screen and (max-width: 768px) {
    ${font.set(32, 'bold')}
    border-radius: 30px;
    height: 44px;
    line-height: 34px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SearchInput = styled(SearchInputAtom)<SearchInputAtomProps>`
  width: 520px;
  height: 50px;
  & > ${Input} {
    border: none;
    transition: 0.24s ease-in;
    :hover,
    :focus {
      transition: 0.12s ease-out;
      box-shadow: 0px 8px 16px rgba(32, 32, 32, 26%);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    & > ${Input} {
      border-radius: 30px;
      height: 44px;
    }
  }
`;

export const TagsContainer = styled.div`
  // margin-top: 12px;
  margin: 10px 0 50px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Tag = styled(TagAtom)`
  margin: 0 4px;
  color: rgba(0, 0, 0, 0.7);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
`;
