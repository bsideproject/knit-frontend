import styled from '@emotion/styled';
import ReactContentEditable from 'react-contenteditable';
import { theme } from '~/styles';
import * as font from '~/styles/font';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
`;

export const Content = styled.div<{ height?: string; paddingTop?: string }>`
  display: flex;
  flex-wrap: wrap;
  background: ${theme.palette.white};
  padding: 30px;
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
  height: ${({ height }) => height}px;
  padding-top: ${({ paddingTop }) => paddingTop}px;
`;
export const Row = styled.div<{ span?: number }>`
  width: ${({ span }) => {
    if (span === 2) {
      return '100%';
    }
    return `50%`;
  }};
`;

export const Label = styled.div`
  display: inline-block;
  width: 90px;
`;

export const ThreadTitle = styled.div`
  display: block;
  width: 100%;
  ${font.set(26, 'bold')}
  padding-bottom: 20px;
`;
export const TagTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
  ${font.set(16, 'bold')}
`;

export const ContentEditable = styled(ReactContentEditable as any)`
  padding: 20px;
  width: 100%;
  background: ${theme.palette.white};
  cursor: not-allowed;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 3px;
  padding: 14px;
  color: #18a0fb;
  :first-of-type {
    margin-left: 20px;
  }
`;

export const ModalTitle = styled.div`
  ${font.set(16, 'bold')}
`;

export const ModalContent = styled.div`
  padding-top: 20px;
  ${font.set(14)}
`;
