import styled from '@emotion/styled';

interface ContentsProps {
  paddingTopPx: number;
}

export const Contents = styled.div<ContentsProps>`
  padding-top: ${({ paddingTopPx }) => paddingTopPx}px;
  flex: 1 1 auto;
`;
