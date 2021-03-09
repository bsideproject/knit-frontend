import { FC } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames(styles.wrapper, className)}>{children}</div>;
};
export default Container;
