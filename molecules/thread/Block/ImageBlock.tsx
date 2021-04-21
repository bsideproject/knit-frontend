import { FC, FormEventHandler, KeyboardEventHandler, memo, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Container, RepresentButton } from './ImageBlock.styled';
import { FocusType, ImageBlockProps } from './types';
import { setCaretPos } from '~/utils/dom';

const ImageBlock: FC<ImageBlockProps> = ({
  url,
  editable,
  represent,
  focusInfo,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyPress,
  onChangeRepresent,
  className,
}) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!focusInfo) return;
    if (focusInfo.focusType === FocusType.PASSIVE) return;

    const element = domRef.current;
    if (!element) return;

    setCaretPos(element, 0);
  }, [focusInfo]);

  const handleForm: FormEventHandler = (event) => event.preventDefault();

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key !== 'Enter') {
      event.preventDefault();
    }
    onKeyDown?.(event);
  };

  const handleKeyPress: KeyboardEventHandler = (event) => {
    event.preventDefault();
    onKeyPress?.(event);
  };

  const handleClickRepresent = () => {
    if (represent) return;
    onChangeRepresent();
  };

  return (
    <Container
      ref={domRef}
      data-block="true"
      contentEditable
      suppressContentEditableWarning
      editable={editable}
      onBlur={onBlur}
      onFocus={onFocus}
      onCut={handleForm}
      onCopy={handleForm}
      onPaste={handleForm}
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      className={className}
    >
      <img alt="" src={url} />
      {editable && (
        <RepresentButton represent={represent} onClick={handleClickRepresent} tabIndex={-1}>
          대표
        </RepresentButton>
      )}
    </Container>
  );
};

export default styled(memo(ImageBlock))``;
