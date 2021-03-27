import styled from '@emotion/styled';

export const Column = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-right: 14px;
  }
`;
