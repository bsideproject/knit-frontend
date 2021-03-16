import styled from '@emotion/styled';
import Button from './Button';

const CloseButton = styled(Button)`
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(./assets/close.png);
    background-size: 20px 20px;
    background-repeat: no-repeat;
  }
`;

export default CloseButton;
