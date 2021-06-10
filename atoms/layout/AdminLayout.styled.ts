import styled from '@emotion/styled';
import { Layout as ALayout } from 'antd';
import * as font from '~/styles/font';

const { Content: AContent, Sider: ASider } = ALayout;

interface ContentsProps {
  paddingTopPx: number;
}

export const Contents = styled.div<ContentsProps>`
  display: flex;
  padding-top: ${({ paddingTopPx }) => paddingTopPx}px;
  flex: 1 1 auto;
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

export const Layout = styled(ALayout)`
  background: #f5f7fa;
`;

export const Content = styled(AContent)`
  margin: 0 16px;
  background: #f5f7fa;
`;

export const Sider = styled(ASider)`
  background: ${({ theme }) => theme.palette.white};
  .ant-layout-sider-trigger {
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};
  }
`;
