import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.tr``;

export const Label = styled.th`
  padding-right: 60px;
  max-width: 160px;
  box-sizing: content-box;

  ${font.set(18)}
  line-height: 64px;
  color: #999;

  vertical-align: baseline;
`;

export const Contents = styled.td`
  padding: 0;
  vertical-align: baseline;
`;
