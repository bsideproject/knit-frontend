import { Wrapper, TextInputProps } from './TextInput.styled';
import Input from './Input';

const TextInput = ({ placeHolder, className, disabled, error, maxLength }: TextInputProps) => {
  return (
    <Wrapper className={className} disabled={disabled} error={error} maxLength={maxLength}>
      <Input placeHolder={placeHolder} disabled={disabled} maxLength={maxLength} />
    </Wrapper>
  );
};
export default TextInput;
