import { FC, ReactNode } from 'react';
import { Container, Label, Contents } from './Meta.styled';

interface Props {
  label: ReactNode;
}

const Meta: FC<Props> = ({ label, children }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Contents>{children}</Contents>
    </Container>
  );
};

export default Meta;
