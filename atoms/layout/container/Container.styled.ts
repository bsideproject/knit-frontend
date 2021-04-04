import styled from '@emotion/styled';
import { fitInResolution, adminFitInResolution } from '~/styles/layout';

export const Wrapper = styled.div`
  ${fitInResolution}
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const AdminWrapper = styled.div`
  ${adminFitInResolution}
  width: 100%;
  height: 100%;
  align-items: center;
`;
