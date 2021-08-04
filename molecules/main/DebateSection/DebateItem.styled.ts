import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Box = styled.div`
  height: 180px;
  margin: 5px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BoxTitle = styled.span`
  ${font.set(16, 'bold')}
  ${font.ellipse(1)}
  line-height: 36px;
  color: #000000;
`;

export const BoxContent = styled.span`
  ${font.set(13, 'normal')}
  color: #555555;
`;

export const BoxComment = styled.span`
  ${font.set(13, 'normal')}
  color: #888888;
`;
