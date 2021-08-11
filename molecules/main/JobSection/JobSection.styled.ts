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
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thumbnail = styled.div`
  align-self: center;

  width: 100%;
  height: 200px;
  margin-bottom: 13.5px;
  background-size: contain;
  background: url(/assets/images/thumbnail.png) no-repeat center center;
`;

export const JobTag = styled.div`
  width: 54px;
  height: 20px;
  align-self: flex-start;
  padding: 2px 9px;
  ${font.set(12)}
  background: #FED43F;
  border-radius: 10px;
  color: #2f2f2f;
  margin-bottom: 8px;
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
