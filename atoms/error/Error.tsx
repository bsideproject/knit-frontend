import { FC } from 'react';
import { Container } from './Error.styled';

const Error: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Error;
