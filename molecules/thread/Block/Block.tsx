import styled from '@emotion/styled';
import { FC, useRef } from 'react';
import { ContentEditableEvent } from 'react-contenteditable';
import { Container } from './Block.styled';
import { BlockProps } from './types';

const Block: FC<BlockProps> = ({
  className,
  editable,
  multiline = true,
  placeholder,
  value,
  onChange,
  onKeyPressEnter,
}) => {
  const domRef = useRef();

  const handleChange: (event: ContentEditableEvent) => void = ({ target }) => {
    onChange(target.value ?? '');
  };

  const handleKeyPress: (event: ContentEditableEvent) => void = (event) => {
    const { key, shiftKey } = event as any;

    if (key === 'Enter') {
      if (!shiftKey) {
        onKeyPressEnter((domRef.current as any).el.current);
      }
      if (!multiline) {
        event.preventDefault();
      }
    }
  };

  return (
    <Container
      ref={domRef}
      spellCheck="false"
      autoCapitalize="off"
      autoCorrect="off"
      data-block="true"
      className={className}
      placeholder={placeholder}
      disabled={!editable}
      html={value ?? ''}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default styled(Block)``;
