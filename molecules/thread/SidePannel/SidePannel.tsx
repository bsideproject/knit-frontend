import { FC, memo, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import {
  ImageIcon,
  VideoIcon,
  SmileIcon,
  LineIcon,
  CodeIcon,
  LinkIcon,
  QuoteIcon,
  GridIcon,
} from '~/public/assets/icon';
import { Container, IconContainer } from './SidePannel.styled';
import { promptFileSelector } from '~/utils/file';
import EmojiPicker, { Emoji } from './EmojiPicker';
import { ContentType } from '~/@types/resources/thread';
import { CreatedContent } from './types';

interface Props {
  onContentCreated: (createdContent: CreatedContent) => void;
}

const SidePannel: FC<Props> = ({ onContentCreated }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [emojiOpened, setEmojiOpened] = useState(false);

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      if (!ref.current || !ref.current.parentElement || !document.scrollingElement) return;
      const diff = 30 - ref.current.parentElement.offsetTop + document.scrollingElement.scrollTop;
      ref.current.style.transform = `translate(0, ${Math.max(diff, 0)}px)`;
    }, 15);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickImageIcon = async () => {
    const file = await promptFileSelector();
    console.log(file);
  };

  const handleClickSmileIcon = () => {
    if (emojiOpened) return;
    setEmojiOpened(true);
  };

  const handleSelectEmoji = (emoji: Emoji) => {
    setEmojiOpened(false);
    onContentCreated({
      type: ContentType.EMOJI,
      emoji: emoji.emoji,
    });
  };

  return (
    <Container ref={ref} onMouseDown={(event) => event.preventDefault()}>
      <IconContainer onClick={handleClickImageIcon}>
        <ImageIcon />
      </IconContainer>
      <IconContainer>
        <VideoIcon />
      </IconContainer>
      <IconContainer onClick={handleClickSmileIcon}>
        <SmileIcon />
        {emojiOpened && (
          <EmojiPicker onSelect={handleSelectEmoji} onClickOutside={() => setEmojiOpened(false)} />
        )}
      </IconContainer>
      <IconContainer>
        <LineIcon />
      </IconContainer>
      <IconContainer>
        <CodeIcon />
      </IconContainer>
      <IconContainer>
        <LinkIcon />
      </IconContainer>
      <IconContainer>
        <QuoteIcon />
      </IconContainer>
      <IconContainer>
        <GridIcon />
      </IconContainer>
    </Container>
  );
};

export default memo<FC<Props>>(SidePannel);
