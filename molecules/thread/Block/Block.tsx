import styled from '@emotion/styled';
import { FC, memo, useEffect, useRef } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { setCaretPos } from '~/utils/dom';
import { useWatchRef } from './helpers';
import { Container } from './Block.styled';
import { BlockProps, FocusType } from './types';

const Block: FC<BlockProps> = ({
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
  const valueRef = useWatchRef<BlockProps['value']>(value);
  const onFocusRef = useWatchRef<BlockProps['onFocus']>(onFocus);
  const onBlurRef = useWatchRef<BlockProps['onBlur']>(onBlur);
  const onChangeRef = useWatchRef<BlockProps['onChange']>(onChange);
  const onKeyPressRef = useWatchRef<BlockProps['onKeyPress']>(onKeyPress);
  const onKeyDownRef = useWatchRef<BlockProps['onKeyDown']>(onKeyDown);

  const domRef = useRef<ContentEditable>();

  useEffect(() => {
    if (!focusInfo) return;
    const { focusType } = focusInfo;

    if (focusType === FocusType.PASSIVE) return;

    const element = domRef.current?.el.current;
    if (!element) return;

    if (focusType === FocusType.FIRST_CARET) {
      setCaretPos(element, 0);
      return;
    }
    if (focusType === FocusType.LAST_CARET) {
      setCaretPos(element, valueRef.current?.length ?? 0);
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

  const handleKeyPress = (event: ContentEditableEvent & KeyboardEvent) => {
    onKeyPressRef.current?.(event);
  };

  const handleKeyDown = (event: ContentEditableEvent & KeyboardEvent) => {
    onKeyDownRef.current?.(event);
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
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      onKeyDown={handleKeyDown}
    />
  );
};

export default styled(memo<FC<BlockProps>>(Block))``;
