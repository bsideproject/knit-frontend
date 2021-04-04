import { FC } from 'react';
import { Wrapper } from './Container.styled';

interface ContainerProps {
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export const AdminContainer: FC<ContainerProps> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
