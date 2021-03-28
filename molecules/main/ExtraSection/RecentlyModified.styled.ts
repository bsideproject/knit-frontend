import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const Title = styled.span`
  ${font.ellipse(1)}
  ${font.set(18, 'bold')}
  margin-bottom: 16px;
`;

export const Contents = styled.div``;

export const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  ${font.set(13)}

  cursor: pointer;
`;

export const ItemTitle = styled.span`
  flex: 1 1 0;
  margin-right: 10px;

  ${font.ellipse(1)}
`;

export const ItemDate = styled.span`
  width: auto;

  ${font.ellipse(1)}
`;
