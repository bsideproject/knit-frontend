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
} from './DividerPicker.styled';

interface Props {
  onSelect: (deviderType: DividerType) => void;
  onClickOutside?: () => void;
  className?: string;
}
const DividerPicker: FC<Props> = ({ onSelect, onClickOutside, className }) => {
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
    </Container>
  );
};

export default styled(memo(DividerPicker))``;
