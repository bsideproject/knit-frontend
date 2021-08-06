import styled from '@emotion/styled';

export const Column = styled.div`
  flex: 1 1 auto;
  // min-width: 0;
  // flex-direction: column;
  // &:not(:last-of-type) {
  //   margin-right: 14px;
  // }

  display: grid;
  width: 100%;
  // max-width: 900px;
  grid-template-columns: repeat(2, 50%);

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;
