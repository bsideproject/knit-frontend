import { FC, memo } from 'react';
import styled from '@emotion/styled';
import { useOnClickOutside } from '~/utils/dom';
import { Container, OptionWrapper, TrashIcon } from './CodePicker.styled';

interface Props {
  // onSelect: (deviderType: CodeType) => void;
  onDelete?: () => void;
  onClickOutside?: () => void;
  className?: string;
  isPanel?: boolean;
}
const CodePicker: FC<Props> = ({ onDelete, onClickOutside, className }) => {
  const elemRef = useOnClickOutside<HTMLDivElement>(onClickOutside);

  return (
    <Container ref={elemRef} onClick={(event) => event.stopPropagation()} className={className}>
      <OptionWrapper onClick={() => onDelete?.()}>
        <TrashIcon />
      </OptionWrapper>
    </Container>
  );
};

export default styled(memo(CodePicker))``;
