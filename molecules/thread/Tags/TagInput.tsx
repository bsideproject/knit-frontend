import { FC, MutableRefObject, forwardRef, useEffect } from 'react';
import { ContentEditableEvent } from 'react-contenteditable';
import { Input } from './TagInput.styled';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

type Ref = MutableRefObject<HTMLDivElement>;

const TagInput: FC<Props> = ({ value, onChange, onCancel, onSubmit }, ref: Ref) => {
  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleChange = ({ target }: ContentEditableEvent) => {
    onChange(target.value ?? '');
  };

  const handleKeyPress = (event: ContentEditableEvent & KeyboardEvent) => {
    const { key } = event;

    if (key === 'Enter') {
      event.preventDefault();
      onSubmit();
    }
  };

  const handleKeyDown = (event: ContentEditableEvent & KeyboardEvent) => {
    const { key } = event;

    if (key === 'Escape') {
      onCancel();
    }
  };

  return (
    <Input
      innerRef={ref}
      html={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      onKeyDown={handleKeyDown}
    />
  );
};

export default forwardRef<HTMLDivElement | undefined, Props>(TagInput as any);
