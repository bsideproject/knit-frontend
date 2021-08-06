import styled from '@emotion/styled';

export const BarContainer = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    height: 8px;
    border-top: 1px solid #e2e1eb;
    margin: 30px 0;
    background: #f3f2f5;
  }
`;
