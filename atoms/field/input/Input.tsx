import { VFC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormReturn, RegisterOptions } from 'react-hook-form';
import { InputStyled } from './Input.styled';

export interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'pattern'
  > {
  error?: boolean;
  name?: string;
  methods?: UseFormReturn<any>;
  pattern?: RegExp;
}
const Input: VFC<Props> = ({
  className,
  placeholder = '',
  disabled,
  maxLength,
  value,
  name,
  methods,
  pattern,
  required,
  ref,
}) => {
  const rules: RegisterOptions = {};
  if (required) {
    rules.required = '내용을 입력해주세요.';
  }

  if (pattern) {
    rules.pattern = { value: pattern, message: '형식이 일치하지 않습니다.' };
  }

  console.log(ref);
  return (
    <InputStyled
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      value={value}
      ref={ref}
      {...methods?.register(name || '', { ...rules })}
    />
  );
};
export default Input;
