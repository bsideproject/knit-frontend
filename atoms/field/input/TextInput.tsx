import { Wrapper, BorderLine, Input } from './TextInput.styled';
import { Props as InputProps } from './Input';
import { Description } from '~/atoms/description';
import { Error } from '~/atoms/error';

export interface TextInputProps extends InputProps {
  description?: string;
}
const TextInput = ({
  placeholder,
  className,
  disabled,
  error,
  maxLength,
  value,
  name,
  methods,
  description,
  pattern,
  required,
  onChange,
}: TextInputProps) => {
  let errorMessage;

  if (methods && name) {
    const {
      formState: { errors },
    } = methods;

    if (errors[name]) {
      error = true;
      errorMessage = errors[name].message;
    }
  }
  return (
    <Wrapper className={className} error={error}>
      <Input
        methods={methods}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        name={name}
        pattern={pattern}
        onChange={onChange}
      />
      <BorderLine disabled={disabled} error={error} />
      {error ? (
        <Error>{errorMessage}</Error>
      ) : (
        description && <Description>{description}</Description>
      )}
    </Wrapper>
  );
};
export default TextInput;
