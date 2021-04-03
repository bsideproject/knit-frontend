import { FC } from 'react';
import { Wrapper } from './Container.styled';

interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
export default Container;
