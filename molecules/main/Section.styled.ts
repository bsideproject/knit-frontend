import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.span`
  margin-bottom: 20px;
  display: block;
  ${font.set(20, 'bold')};
  color: ${({ theme }) => theme.palette.primary};
`;

export const Contents = styled.div`
  display: flex;
`;
