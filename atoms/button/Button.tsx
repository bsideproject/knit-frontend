import { FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button type="button" className={classNames(className, styles.button)}>
      {children}
    </button>
  );
};

export default Button;
