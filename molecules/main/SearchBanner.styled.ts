import styled from '@emotion/styled';
import * as font from '~/styles/font';

import SearchInputAtom, { Props as SearchInputAtomProps } from '~/atoms/field/input/SearchInput';
import { Input } from '~/atoms/field/input/SearchInput.styled';
import { Hashtag } from '~/atoms/hashtag';

export const Container = styled.div`
  height: 280px;
  background: linear-gradient(270deg, #7800ef 0.01%, #27edd5 100%), #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 5%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Headline = styled.span`
  ${font.set(42, 'bold')}
  color: white;
  line-height: 52px;
  text-shadow: 0px 8px 16px rgba(32, 32, 32, 20%);
`;

export const SearchInput = styled(SearchInputAtom)<SearchInputAtomProps>`
  margin-top: 20px;
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
`;

export const HashtagsContainer = styled.div`
  margin-top: 12px;

  & > ${Hashtag} {
    margin: 0 4px;
  }
`;
