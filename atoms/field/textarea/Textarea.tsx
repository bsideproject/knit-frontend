import {
  useRef,
  useState,
  useEffect,
  KeyboardEvent,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  VFC,
} from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Description } from '~/atoms/description';
import { Error } from '~/atoms/error';

import { Container, TextareaStyled } from './Textarea.styled';

export interface TextareaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
  name?: string;
  methods?: UseFormReturn<any>;
  description?: string;
  pattern?: RegExp;
  maxRow: number;
}

// @todo => maxRow 에 맞는 css 조정
const Textarea: VFC<TextareaProps> = ({
  placeholder,
  className,
  disabled,
  error,
  maxLength,
  value,
  name,
  methods,
  description,
  required,
  maxRow,
}) => {
  let errorMessage;

  const [currentValue, setCurrentValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  if (methods && name) {
    const {
      formState: { errors },
    } = methods;

    if (errors[name]) {
      error = true;
      errorMessage = errors[name].message;
    }
  }

  useEffect(() => {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.style.height = '0px';
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [currentValue]);

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = event;
    if (key === 'Enter') {
      if (maxRow <= currentValue.split('\n').length) {
        event.preventDefault();
      }
    }
  };
  return (
    <Container className={className}>
      <TextareaStyled
        ref={textareaRef}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        name={name}
        onKeyPress={handleKeyPress}
        onChange={(e) => {
          setCurrentValue(e.target.value);
        }}
      />

      {error ? (
        <Error>{errorMessage}</Error>
      ) : (
        description && <Description>{description}</Description>
      )}
    </Container>
  );
};

export default Textarea;
