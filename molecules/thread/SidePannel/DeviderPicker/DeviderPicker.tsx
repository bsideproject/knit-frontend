import { FC, memo } from 'react';
import styled from '@emotion/styled';
import { useOnClickOutside } from '~/utils/dom';
import { DeviderType } from '~/@types/resources/thread';
import {
  Container,
  OptionWrapper,
  DashedLine,
  DoubleLine,
  NormalLine,
  ShortLine,
  SolidLine,
} from './DeviderPicker.styled';

interface Props {
  onSelect: (deviderType: DeviderType) => void;
  onClickOutside?: () => void;
  className?: string;
}
const DeviderPicker: FC<Props> = ({ onSelect, onClickOutside, className }) => {
  const elemRef = useOnClickOutside<HTMLDivElement>(onClickOutside);

  return (
    <Container ref={elemRef} onClick={(event) => event.stopPropagation()} className={className}>
      <OptionWrapper onClick={() => onSelect(DeviderType.NORMAL)}>
        <NormalLine />
      </OptionWrapper>
      <OptionWrapper onClick={() => onSelect(DeviderType.DASHED)}>
        <DashedLine />
      </OptionWrapper>
      <OptionWrapper onClick={() => onSelect(DeviderType.SOLID)}>
        <SolidLine />
      </OptionWrapper>
      <OptionWrapper onClick={() => onSelect(DeviderType.DOUBLE)}>
        <DoubleLine />
      </OptionWrapper>
      <OptionWrapper onClick={() => onSelect(DeviderType.SHORT)}>
        <ShortLine />
      </OptionWrapper>
    </Container>
  );
};

export default styled(memo(DeviderPicker))``;
