import styled from '@emotion/styled';
import { FC, KeyboardEventHandler, memo, useEffect, useRef } from 'react';
import Highlight from 'react-highlight.js';
import { setCaretPos } from '~/utils/dom';
import { useWatchRef } from './helpers';
import { Container } from './CodeBlock.styled';
import { CodeBlockProps, FocusType } from './types';
import { CodePicker } from '~/molecules/thread/Code';

const CodeBlock: FC<CodeBlockProps> = ({
  className,
  editable = false,
  value,
  focusInfo,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  onKeyPress = () => {},
  onKeyDown = () => {},
  onDelete,
}) => {
  // const valueRef = useWatchRef<CodeBlockProps['value']>(value);
  // const onFocusRef = useWatchRef<CodeBlockProps['onFocus']>(onFocus);
  const onChangeRef = useWatchRef<CodeBlockProps['onChange']>(onChange);
  console.log(onChangeRef);
  const onBlurRef = useWatchRef<CodeBlockProps['onBlur']>(onBlur);
  const onKeyPressRef = useWatchRef<CodeBlockProps['onKeyPress']>(onKeyPress);
  const onKeyDownRef = useWatchRef<CodeBlockProps['onKeyDown']>(onKeyDown);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!focusInfo) return;
    const { focusType } = focusInfo;
    if (focusType === FocusType.PASSIVE) return;

    const element = domRef.current;
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

  // const handleFocus = () => {
  //   onFocusRef.current?.();
  // };

  const handleBlur = () => {
    onBlurRef.current?.();
  };

  // const handleChange = (event: ContentEditableEvent) => {
  //   onChangeRef.current?.(event);
  // };

  const handleKeyPress: KeyboardEventHandler = (event) => {
    onKeyPressRef.current?.(event);
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    onKeyDownRef.current?.(event);
  };
  return (
    <Container
      ref={domRef}
      data-block="false"
      contentEditable
      suppressContentEditableWarning
      editable={editable}
      onBlur={handleBlur}
      onFocus={onFocus}
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      className={className}
      // html={`<pre><code class="javascript">${value}</code></pre>`}
    >
      <Highlight language="javascript">{value}</Highlight>
      {focusInfo && <CodePicker onDelete={onDelete} />}
    </Container>
  );
};

export default styled(memo<FC<CodeBlockProps>>(CodeBlock))``;
