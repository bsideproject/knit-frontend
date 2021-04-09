import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as font from '~/styles/font';
import { Hashtag as AtomHashtag } from '~/atoms/hashtag';

export const Container = styled.div`
  height: 223px;
  background: white;
  padding: 20px;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  ${font.set(20)}

  display: flex;
  align-items: center;
  font-weight: 600;
`;
export const Content = styled.div`
  display: flex;
`;
export const Image = styled.img`
  width: 143px;
  height: 143px;
`;

export const Column = styled.div<{ left?: boolean; right?: boolean }>`
  ${({ left, right }) => {
    if (left) {
      return css`
        flex: 1 1 80%;
        margin-right: 20px;
      `;
    }
    if (right) {
      return css`
        flex: 1 1 20%;
      `;
    }
    return css``;
  }}
`;
export const Article = styled.article`
  margin-bottom: 30px;
  ${font.set(15)}
  color: #5c5c60;
  &:contain('카카오') {
    color: red;
  }
`;

export const Hashtag = styled(AtomHashtag)`
  width: fit-content;
  border: 1px solid #e2e1eb;
  box-sizing: border-box;
  border-radius: 13px;
  ${font.set(12)}
  color: #818189;
  margin: 3px;
`;
export const HashtagsContainer = styled.div`
  display: flex;
`;
