import styled from '@emotion/styled';
import { theme } from '~/styles';
import * as font from '~/styles/font';

export const Box = styled.div`
  width: 775px;

  display: flex;
  padding: 30px;
  background: ${theme.palette.white};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const Month = styled.h2`
  ${font.set(16, 'bold')}
  margin-right:60px;
  line-height: 40px;
  color: ${theme.palette.black};
`;

export const TypeTitle = styled.h3`
  margin-right: 50px;
  line-height: 40px;

  ${font.set(14, 'bold')}
  color: ${theme.palette.primary};
`;

export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Line = styled.div`
  height: auto;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-right: 20px;
  border-left: 4px solid ${theme.palette.primary};
  border-radius: 16px;
`;
