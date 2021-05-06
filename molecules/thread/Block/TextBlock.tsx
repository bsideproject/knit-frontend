import styled from '@emotion/styled';
import { FC, KeyboardEventHandler, memo, useEffect, useRef } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { setCaretPos } from '~/utils/dom';
import { useWatchRef } from './helpers';
import { Container } from './TextBlock.styled';
import { TextBlockProps, FocusType } from './types';

const TextBlock: FC<TextBlockProps> = ({
  className,
  editable = false,
  placeholder,
  value,
  focusInfo,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  onKeyPress = () => {},
  onKeyDown = () => {},
}) => {
  // const valueRef = useWatchRef<TextBlockProps['value']>(value);
  const onFocusRef = useWatchRef<TextBlockProps['onFocus']>(onFocus);
  const onBlurRef = useWatchRef<TextBlockProps['onBlur']>(onBlur);
  const onChangeRef = useWatchRef<TextBlockProps['onChange']>(onChange);
  const onKeyPressRef = useWatchRef<TextBlockProps['onKeyPress']>(onKeyPress);
  const onKeyDownRef = useWatchRef<TextBlockProps['onKeyDown']>(onKeyDown);

  const domRef = useRef<ContentEditable>();

  useEffect(() => {
    if (!focusInfo) return;
    const { focusType } = focusInfo;
    if (focusType === FocusType.PASSIVE) return;

    const element = domRef.current?.el.current;
    if (!element) return;

    if (focusType === FocusType.FIRST_CARET) {
      setCaretPos(element, focusType);
      return;
    }
    if (focusType === FocusType.LAST_CARET) {
      setCaretPos(element, focusType);
      return;
    }
    if (focusType === FocusType.DESIGNATE_CARET) {
      setCaretPos(element, (focusInfo as { focusCaretPos: number }).focusCaretPos);
    }
  }, [focusInfo]);

  const handleFocus = () => {
    onFocusRef.current?.();
  };

  const handleBlur = () => {
    onBlurRef.current?.();
  };

  const handleChange = (event: ContentEditableEvent) => {
    onChangeRef.current?.(event);
  };

  const handleKeyPress: KeyboardEventHandler = (event) => {
    onKeyPressRef.current?.(event);
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    onKeyDownRef.current?.(event);
  };

  return (
    <Container
      ref={domRef}
      data-block="true"
      spellCheck="false"
      autoCapitalize="off"
      autoCorrect="off"
      className={className}
      placeholder={placeholder}
      disabled={!editable}
      html={value ?? ''}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      onKeyDown={handleKeyDown}
    />
  );
};

export default styled(memo<FC<TextBlockProps>>(TextBlock))``;
