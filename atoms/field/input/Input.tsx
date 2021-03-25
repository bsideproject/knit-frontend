import { VFC } from 'react';
import { InputStyled } from './Input.styled';

export interface Props {
  disabled?: boolean;
  error?: boolean;
  placeHolder?: string;
  maxLength?: number;
  className?: string;
}
const Input: VFC<Props> = ({ placeHolder = '', disabled, maxLength }) => {
  return <InputStyled placeholder={placeHolder} disabled={disabled} maxLength={maxLength} />;
};
export default Input;
