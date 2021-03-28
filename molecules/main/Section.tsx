import { FC, ReactNode } from 'react';
import { Container, Title, Contents } from './Section.styled';

interface Props {
  title?: ReactNode;
}
const Section: FC<Props> = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Contents>{children}</Contents>
    </Container>
  );
};

export default Section;
