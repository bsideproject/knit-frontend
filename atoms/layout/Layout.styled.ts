import styled from '@emotion/styled';

interface ContentsProps {
  // paddingTopPx: number;
}

// padding-top: ${({ paddingTopPx }) => paddingTopPx}px;
export const Contents = styled.div<ContentsProps>`
  padding-top: 130px;
  flex: 1 1 auto;
  @media only screen and (max-width: 768px) {
    padding-top: 0;
  }
`;
