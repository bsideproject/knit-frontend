import { Wrapper, TextInputProps } from './TextInput.styled';
import Input from './Input';

const TextInput = ({
  placeholder,
  className,
  disabled,
  error,
  maxLength,
  value,
  name,
  methods,
}: TextInputProps) => {
  return (
    <Wrapper className={className} disabled={disabled} error={error} maxLength={maxLength}>
      <Input
        methods={methods}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        name={name}
      />
    </Wrapper>
  );
};
export default TextInput;
