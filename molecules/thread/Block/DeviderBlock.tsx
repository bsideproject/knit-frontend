import { FC, FormEventHandler, KeyboardEventHandler, memo, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { DeviderBlockProps, FocusType } from './types';
import {
  Container,
  DashedLine,
  DoubleLine,
  NormalLine,
  ShortLine,
  SolidLine,
} from './DeviderBlock.styled';
import { setCaretPos } from '~/utils/dom';
import { DeviderType } from '~/@types/resources/thread';
import DeviderPicker from '../SidePannel/DeviderPicker';

const DeviderBlock: FC<DeviderBlockProps> = ({
  type,
  editable,
  focusInfo,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyPress,
  className,
  onChange,
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
      {type === DeviderType.NORMAL ? (
        <NormalLine />
      ) : type === DeviderType.DASHED ? (
        <DashedLine />
      ) : type === DeviderType.SOLID ? (
        <SolidLine />
      ) : type === DeviderType.DOUBLE ? (
        <DoubleLine />
      ) : (
        <ShortLine />
      )}
      {focusInfo && <DeviderPicker onSelect={onChange} />}
    </Container>
  );
};

export default styled(memo(DeviderBlock))``;
