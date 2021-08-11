import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  width: 100%;
  margin-top: 42px;
  &:first-of-type {
    margin-top: 63px;
    @media (max-width: 768px) {
      margin-top: 0px;
    }
  }
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.div`
  margin-bottom: 20px;
  display: block;
  ${font.set(20, 'bold')};
  color: ${({ theme }) => theme.palette.primary};

  @media (max-width: 768px) {
    ${font.set(18, 'bold')};
    margin-left: 16px;
    margin-bottom: 12px;
  }
`;

export const Contents = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
