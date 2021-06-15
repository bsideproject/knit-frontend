import { FC, memo, useState } from 'react';
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
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  return (
    <Container ref={elemRef} onClick={(event) => event.stopPropagation()} className={className}>
      <Content>
        <TextInput
          placeholder="URL을 입력해주세요. (필수)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextInput
          placeholder="무엇에 대한 링크인가요?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Content>

      <AddButton
        color={Color.QUATENARY}
        size={Size.SMALL}
        onClick={() => onSelect(url, description)}
      >
        추가
      </AddButton>
    </Container>
  );
};

export default styled(memo(UrlPicker))``;
