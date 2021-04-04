import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.tr``;

export const Label = styled.th`
  position: relative;

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

export const Required = styled.div`
  position: absolute;
  top: 20px;
  left: -5px;

  width: 5px;
  height: 5px;

  background: #5ae8d7;
  border-radius: 50%;
`;
