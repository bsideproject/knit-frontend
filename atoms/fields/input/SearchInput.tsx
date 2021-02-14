import classNames from 'classnames';

import styles from './Input.module.scss';
import Input, { Props as InputProps } from './Input';
import { InputSize } from './types';

interface Props extends InputProps {
  size?: InputSize;
}
export default function SearchInput({ placeHolder, size = 'middle' }: Props) {
  return (
    <div className={classNames(styles.wrapper, { size })}>
      <Input placeHolder={placeHolder} />
      아이콘
    </div>
  );
}
