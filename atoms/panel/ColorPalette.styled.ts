import styled from '@emotion/styled';
import { InlinePanel } from '~/@types/style';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 84px;
  height: 184px;
  bottom: ${InlinePanel.BOTTOM};
  right: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Color = styled.div<{ colorCode: string }>`
  background: ${({ colorCode }) => colorCode};
  border: ${({ colorCode }) => colorCode === '#FFFFFF' && `1px solid #2F2F2F`};
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin: 4px;
  cursor: pointer;
`;
