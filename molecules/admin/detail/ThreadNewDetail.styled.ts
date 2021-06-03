import styled from '@emotion/styled';
import { theme } from '~/styles';
import * as font from '~/styles/font';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
`;

export const Content = styled.div<{ height: string; paddingTop?: string }>`
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
`;
export const TagTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  ${font.set(18, 'bold')}
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 60%;
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
  width: 100px;
  height: 100%;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 3px;
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
