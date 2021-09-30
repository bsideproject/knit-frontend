import styled from '@emotion/styled';

export const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 14px;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;
