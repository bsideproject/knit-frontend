import styled from '@emotion/styled';
import { CSSzIndex } from '~/@types/style';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: ${CSSzIndex.HEADER};
`;
