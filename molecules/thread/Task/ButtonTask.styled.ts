import styled from '@emotion/styled';
import { Button } from '~/atoms/button';

export const StyledButton = styled(Button)`
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;
