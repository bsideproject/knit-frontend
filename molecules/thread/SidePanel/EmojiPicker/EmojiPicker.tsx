import dynamic from 'next/dynamic';
import { FC, memo, useEffect } from 'react';
import type { IEmojiData } from 'emoji-picker-react';
import { Container } from './EmojiPicker.styled';

export type Emoji = IEmojiData;

const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

interface Props {
  onSelect: (emoji: Emoji) => void;
  onClickOutside: () => void;
}
const EmojiPicker: FC<Props> = ({ onSelect, onClickOutside }) => {
  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest('.emoji-picker-react')) return;
      onClickOutside();
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Container onClick={(event) => event.stopPropagation()}>
      <Picker native disableSearchBar onEmojiClick={(event, emoji) => onSelect(emoji)} />
    </Container>
  );
};

export default memo(EmojiPicker);
