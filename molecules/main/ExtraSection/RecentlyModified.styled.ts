import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  min-width: 295px;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
    padding: 0 16px;
    min-width: unset;
  }
`;

export const Title = styled.span`
  ${font.ellipse(1)}
  ${font.set(18, 'bold')}
  margin-bottom: 16px;
  color: #2f2f2f;
  max-width: 140px;
  @media only screen and (max-width: 768px) {
    max-width: unset;

    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const Contents = styled.div``;

export const ItemContainer = styled.div`
  display: flex;
  // margin-bottom: 10px;
  ${font.set(14)}
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 14px 0 18px;
    border-top: 1px solid #f3f2f5;
  }
`;

export const ItemTitle = styled.span`
  width: 70%;
  margin-right: 10px;
  // flex: 1 1 0;
  margin: 0 10px 8px 0;
  // max-width: 170px;
  color: #505055;
  ${font.ellipse(1)}
`;

export const ItemDate = styled.div`
  width: auto;
  color: #a09db1;
  ${font.set(12)}
  ${font.ellipse(1)}
`;
