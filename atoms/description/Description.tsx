import { FC } from 'react';
import { Container } from './Description.styled';

const Description: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Description;
