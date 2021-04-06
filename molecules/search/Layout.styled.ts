import styled from '@emotion/styled';
import { fitInResolutionOnPage } from '~/styles/layout';

export const Container = styled.div`
  ${fitInResolutionOnPage};
  position: relative;
  margin-top: 80px;
`;

export const Content = styled.div`
  background: rgb(245, 245, 248);
  height: 100vh;
`;
