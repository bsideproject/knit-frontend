import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as font from '~/styles/font';
import { resolveProp } from '~/utils/styles';

export const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 24px;
    &:not(:last-child) {
      padding-bottom: 20px;
      border-bottom: 1px solid #f3f2f5;
    }
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
interface ThumbnailProps {
  thumbnailUrl: string;
}
export const Thumbnail = styled.div<ThumbnailProps>`
  display: ${({ thumbnailUrl }) => (thumbnailUrl === '' ? 'none' : 'block')};
  align-self: center;
  width: 100%;
  height: ${({ thumbnailUrl }) => (thumbnailUrl === '' ? 'auto' : '200px')};
  margin-bottom: 13.5px;
  background-size: cover;
  background-image: url(${({ thumbnailUrl }) => (thumbnailUrl !== '' ? thumbnailUrl : '')});
  background-position: center center;
  background-repeat: no-repeat;
`;

interface TagProps {
  categorized: string;
}

export const JobTag = styled.div<TagProps>`
  width: auto;
  height: 20px;
  align-self: flex-start;
  padding: 2px 9px;
  ${font.set(12)}
  border-radius: 10px;
  margin-bottom: 8px;
  color: ${({ categorized }) => {
    if (categorized === '디자인' || categorized === '개발') {
      return '#2f2f2f';
    }
    return `#ffffff`;
  }};
  background: ${({ categorized }) => {
    if (categorized === '기획') {
      return '#F84650';
    }
    if (categorized === '디자인') {
      return '#fed43f';
    }
    if (categorized === '마케팅') {
      return '#0500E2';
    }
    if (categorized === '개발') {
      return '#55F5BB';
    }
    return '#3E3E3E';
  }};
`;

export const Title = styled.div`
  ${font.set(16, 'bold')}
  color: #2f2f2f;
  align-self: flex-start;
`;

export const HashTags = styled.div`
  ${font.ellipse(3)}
  display: block;
  ${font.set(14)};
  margin-bottom: 10px;
  color: #818189;
  align-self: flex-start;
`;

export const BottomGroup = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CountGroup = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }
`;

export const Date = styled.div`
  @media (max-width: 768px) {
    ${font.set(12)};
    color: #a09db1;
  }
`;

export const Count = styled.span<{ type: 'view' | 'like' }>`
  ${font.set(12)}
  color: #909090;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  ${resolveProp('type', {
    view: css`
      padding-left: 19px;
      background: url(/assets/view.svg) no-repeat left center;
    `,
    like: css`
      padding-left: 16px;
      background: url(/assets/thumb.svg) no-repeat left center;
    `,
  })}
`;
