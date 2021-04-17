import { FC, memo, ReactNode } from 'react';
import { Container, Required, Label, Contents } from './Meta.styled';

interface Props {
  label: ReactNode;
  required?: boolean;
}

const Meta: FC<Props> = ({ label, required = false, children }) => {
  return (
    <Container>
      <Label>
        {required && <Required />}
        {label}
      </Label>
      <Contents>{children}</Contents>
    </Container>
  );
};

export default memo<FC<Props>>(Meta);
