import styled from '@emotion/styled';

interface ContentsProps {
  paddingTopPx: number;
}

export const Contents = styled.div<ContentsProps>`
  padding-top: ${({ paddingTopPx }) => paddingTopPx}px; //TODO: 적용필요
  @media (max-width: 768px) {
    padding-top: 0;
  }
`;
