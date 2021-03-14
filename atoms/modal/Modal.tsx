import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Container, Aligner, AlignerProps } from './Modal.styled';

interface Props extends AlignerProps {}

const Modal: FC<Props> = ({ children, top, bottom, left, right }) => {
  return ReactDOM.createPortal(
    <Container>
      <Aligner top={top} bottom={bottom} left={left} right={right}>
        {children}
      </Aligner>
    </Container>,
    document.querySelector('body')!
  );
};

export default Modal;
