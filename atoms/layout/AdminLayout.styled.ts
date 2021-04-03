import styled from '@emotion/styled';
import * as font from '~/styles/font';

interface ContentsProps {
  paddingTopPx: number;
}

export const Contents = styled.div<ContentsProps>`
  display: flex;
  padding-top: ${({ paddingTopPx }) => paddingTopPx}px;
  flex: 1 1 auto;
  width: 100vh;
`;

export const DashboardTitle = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  ${font.set(20, 'bold')}
  justify-content: center;
  line-height: 40px;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;
