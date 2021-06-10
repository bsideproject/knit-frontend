import styled from '@emotion/styled';
import { FC, KeyboardEventHandler, memo, useEffect, useRef } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { setCaretPos } from '~/utils/dom';
import { useWatchRef } from './helpers';
import { Container } from './TextBlock.styled';
import { TextBlockProps, FocusType } from './types';
import { useRootState } from '~/app/store';
// import { setMemoFocusInfo } from '~/molecules/thread/Contents/Contents.slice';

const TextBlock: FC<TextBlockProps> = ({
  id,
  className,
  placeholder,
  value,
  focusInfo,
  editable = false,
  openPanel = true,
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
  // const dispatch = useDispatch();
  const domRef = useRef<ContentEditable>();
  const { memoFocusInfo } = useRootState(({ contents }) => contents);
  useEffect(() => {
    if (!focusInfo) return;
    const { focusType } = focusInfo;

    // dispatch(setMemoFocusInfo(null));
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
      test={id && memoFocusInfo?.contentId === id}
      ref={domRef}
      data-block="true"
      data-openpanel={openPanel}
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
