import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button type="button" className={classNames(className, styles.button)}>
      {children}
    </button>
  );
}
