import styled from '@emotion/styled';
import * as font from '~/styles/font.styled';

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;

  ${font.set(13)}

  cursor: pointer;
`;

export const Title = styled.span`
  flex: 1 1 0;
  margin-right: 10px;

  ${font.ellipse(1)}
`;

export const Date = styled.span`
  width: auto;

  ${font.ellipse(1)}
`;
