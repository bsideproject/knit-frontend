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
  min-width: 295px;
  min-height: 80px;
  border-radius: 8px;
  background: url(/assets/images/guide_image.png) no-repeat right 26px center;
`;

export const Title = styled.span<ChildrenProps>`
  ${font.set(16)}
  ${font.ellipse(1)}
  line-height: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: normal;
  }
`;

export const Desc = styled.span<ChildrenProps>`
  ${font.ellipse(1)}
  ${font.set(24, 'bold')}

  line-height: 28px;
  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: bold;
  }
`;
