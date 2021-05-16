import { FC, memo } from 'react';
import styled from '@emotion/styled';
import { useOnClickOutside } from '~/utils/dom';
import { Container, Content, AddButton, TextInput } from './UrlPicker.styled';
import { Color, Size } from '~/@types';

interface Props {
  onSelect: (url: string, description: string) => void;
  onDelete?: () => void;
  onClickOutside?: () => void;
  className?: string;
  isPanel?: boolean;
}
const UrlPicker: FC<Props> = ({ onSelect, onClickOutside, className }) => {
  const elemRef = useOnClickOutside<HTMLDivElement>(onClickOutside);

  return (
    <Container ref={elemRef} onClick={(event) => event.stopPropagation()} className={className}>
      <Content>
        <TextInput placeholder="URL을 입력해주세요. (필수)" />
        <TextInput placeholder="무엇에 대한 링크인가요?" />
      </Content>

      <AddButton
        color={Color.QUATENARY}
        size={Size.SMALL}
        onClick={() => onSelect('test', '네이버')}
      >
        추가
      </AddButton>
    </Container>
  );
};

export default styled(memo(UrlPicker))``;
