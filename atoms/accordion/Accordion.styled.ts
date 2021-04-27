import styled from '@emotion/styled';
import { ArrowBottom as ArrowBottomSvg } from '~/public/assets/icon';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const ArrowBottom = styled(ArrowBottomSvg)<{ isCollapse: boolean }>`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  transition: transform 1s;
  transform: ${({ isCollapse }) => (isCollapse ? `rotate(180deg)` : `rotate(0deg)`)};
`;

export const Content = styled.div<{ collapse: boolean }>`
  width: 100%;
  height: ${({ collapse }) => (collapse ? 'auto' : '0px')};
  overflow: hidden;
  transition: height 1s ease;
`;

export const ChildrenContent = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;
  margin: 0 8px;
`;
