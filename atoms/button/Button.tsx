import { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button type="button" className={classNames(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
