import styled from '@emotion/styled';
import { theme } from '~/styles';
import * as font from '~/styles/font';

export const Container = styled.div`
  margin-top: 5px;
  line-height: 16px;
  ${font.set(11)}
  color: ${theme.palette.danger};
`;
