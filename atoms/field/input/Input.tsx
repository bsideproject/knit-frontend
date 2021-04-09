import { VFC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InputStyled } from './Input.styled';

export interface Props
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
  name?: string;
  methods?: UseFormReturn<any>;
}
const Input: VFC<Props> = ({
  className,
  placeholder = '',
  disabled,
  maxLength,
  value,
  name,
  methods,
}) => {
  return (
    <InputStyled
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      value={value}
      {...methods?.register(name || '')}
    />
  );
};
export default Input;
