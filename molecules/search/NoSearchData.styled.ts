import styled from '@emotion/styled';
import { Button as AtomButton } from '~/atoms/button';
import * as font from '~/styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${font.set(24)};
  text-align: center;
`;

export const Content = styled.div`
  ${font.set(16)};
  text-align: center;
`;

export const Description = styled.div`
  color: gray;
`;

export const Button = styled(AtomButton)`
  margin-top: 20px;
`;

export const Strong = styled.span`
  color: ${({ theme }) => {
    return theme.palette.primary;
  }};
`;
