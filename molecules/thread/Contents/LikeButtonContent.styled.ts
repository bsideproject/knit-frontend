import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 70px 20px;

  & > button {
    ${font.set(20)}
    width: 147px;
    height: 48px;
    border-radius: 8px;
    margin-top: 10px;
    text-align: center;
  }
`;
