import classNames from 'classnames';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { ButtonType } from './types';
import styles from './Button.module.css';

export type ButtonProps = PropsWithChildren<{
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export default function Button({ type = ButtonType.DEFAULT, children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(styles.button, {
        [styles.primary]: type === ButtonType.PRIMARY,
        [styles.danger]: type === ButtonType.DANGER,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
