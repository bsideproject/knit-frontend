import { ReactNode } from 'react';
import styled from '@emotion/styled';
import * as font from '~/styles/font';

interface ChildrenProps {
  children: ReactNode;
}

export const Container = styled.div<ChildrenProps>`
  margin-bottom: 20px;
  padding: 20px;
  padding-right: 100px;

  width: auto;
  min-height: 80px;
  border-radius: 8px;
`;

export const Title = styled.span<ChildrenProps>`
  ${font.set(16, 'bold')}
  ${font.ellipse(1)}
  line-height: 20px;
`;

export const Desc = styled.span<ChildrenProps>`
  ${font.ellipse(1)}
  line-height: 20px;
`;
