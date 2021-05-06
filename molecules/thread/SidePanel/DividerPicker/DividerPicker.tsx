import { FC, memo } from 'react';
import styled from '@emotion/styled';
import { useOnClickOutside } from '~/utils/dom';
import { DividerType } from '~/@types/resources/thread';
import {
  Container,
  OptionWrapper,
  DashedLine,
  DoubleLine,
  NormalLine,
  ShortLine,
  SolidLine,
  TrashIcon,
} from './DividerPicker.styled';

interface Props {
  onSelect: (deviderType: DividerType) => void;
  onDelete?: () => void;
  onClickOutside?: () => void;
  className?: string;
  isPanel?: boolean;
}
const DividerPicker: FC<Props> = ({ onSelect, onDelete, onClickOutside, className, isPanel }) => {
  const elemRef = useOnClickOutside<HTMLDivElement>(onClickOutside);

  return (
    <Container ref={elemRef} onClick={(event) => event.stopPropagation()} className={className}>
      <OptionWrapper onClick={() => onSelect(DividerType.NORMAL)}>
        <NormalLine />
      </OptionWrapper>
      <OptionWrapper onClick={() => onSelect(DividerType.DASHED)}>
        <DashedLine />
      </OptionWrapper>
      <OptionWrapper onClick={() => onSelect(DividerType.SOLID)}>
        <SolidLine />
      </OptionWrapper>
      <OptionWrapper onClick={() => onSelect(DividerType.DOUBLE)}>
        <DoubleLine />
      </OptionWrapper>
      <OptionWrapper onClick={() => onSelect(DividerType.SHORT)}>
        <ShortLine />
      </OptionWrapper>

      {!isPanel && (
        <OptionWrapper onClick={() => onDelete?.()}>
          <TrashIcon />
        </OptionWrapper>
      )}
    </Container>
  );
};

export default styled(memo(DividerPicker))``;
