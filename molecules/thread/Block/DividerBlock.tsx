import { FC, FormEventHandler, KeyboardEventHandler, memo, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { DividerBlockProps, FocusType } from './types';
import {
  Container,
  DashedLine,
  DoubleLine,
  NormalLine,
  ShortLine,
  SolidLine,
} from './DividerBlock.styled';
import { setCaretPos } from '~/utils/dom';
import { DividerType } from '~/@types/resources/thread';
import DividerPicker from '../SidePanel/DividerPicker';

const DividerBlock: FC<DividerBlockProps> = ({
  type,
  editable,
  focusInfo,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyPress,
  className,
  onChange,
  onDelete,
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
      {type === DividerType.NORMAL ? (
        <NormalLine />
      ) : type === DividerType.DASHED ? (
        <DashedLine />
      ) : type === DividerType.SOLID ? (
        <SolidLine />
      ) : type === DividerType.DOUBLE ? (
        <DoubleLine />
      ) : (
        <ShortLine />
      )}
      {focusInfo && <DividerPicker onSelect={onChange} onDelete={onDelete} />}
    </Container>
  );
};

export default styled(memo(DividerBlock))``;
