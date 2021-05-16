import { FC, memo, MouseEvent, useEffect, useRef, useState } from 'react';
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
import { Container, IconContainer } from './SidePanel.styled';
import { promptFileSelector } from '~/utils/file';
import { ContentType, DividerType } from '~/@types/resources/thread';
import { CreatedContent, ImageUploadResponse } from './types';
import EmojiPicker, { Emoji } from './EmojiPicker';
import DividerPicker from './DividerPicker';
import { createDividerContent, createImageContent, createUrlContent } from '../Contents/helpers';
import axios from '~/utils/api';
import { FileExtensionType } from '~/utils/file/types';
import UrlPicker from './UrlPicker';

interface Props {
  onContentCreated: (createdContent: CreatedContent) => void;
}

// const threadImageUploadEndpoint = '/upload/thumbnail';

const SidePannel: FC<Props> = ({ onContentCreated }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [emojiPickerOpened, setEmojiPickerOpened] = useState(false);
  const [deviderPickerOpened, setDividerPickerOpened] = useState(false);
  const [urlPickerOpened, setUrlPickerOpened] = useState(false);
  // const { data } = useSWR<any>(threadImageUploadEndpoint, axios);

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      if (!ref.current || !ref.current.parentElement || !document.scrollingElement) return;
      const diff = 30 - ref.current.parentElement.offsetTop + document.scrollingElement.scrollTop;
      ref.current.style.transform = `translate(0, ${Math.max(diff, 0)}px)`;
    }, 15);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectImage = async () => {
    const file = await promptFileSelector(FileExtensionType.IMAGE);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', 'thread');
    try {
      const { url } = (await axios.post(`upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })) as ImageUploadResponse;

      onContentCreated(createImageContent({ url, represent: false }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectEmoji = (emoji: Emoji) => {
    setEmojiPickerOpened(false);
    onContentCreated({
      type: ContentType.EMOJI,
      emoji: emoji.emoji,
    });
  };

  const handleSelectDivider = (deviderType: DividerType) => {
    setDividerPickerOpened(false);
    onContentCreated(createDividerContent(deviderType));
  };

  const handleSelectUrl = (url: string, description: string) => {
    setUrlPickerOpened(false);
    onContentCreated(createUrlContent(url, description));
  };
  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Container ref={ref} onMouseDown={handleMouseDown}>
      <IconContainer onClick={handleSelectImage}>
        <ImageIcon />
      </IconContainer>
      <IconContainer>
        <VideoIcon />
      </IconContainer>
      <IconContainer onClick={() => setEmojiPickerOpened(true)}>
        <SmileIcon />
        {emojiPickerOpened && (
          <EmojiPicker
            onSelect={handleSelectEmoji}
            onClickOutside={() => setEmojiPickerOpened(false)}
          />
        )}
      </IconContainer>
      <IconContainer onClick={() => setDividerPickerOpened(true)}>
        <LineIcon />
        {deviderPickerOpened && (
          <DividerPicker
            isPanel
            onSelect={handleSelectDivider}
            onClickOutside={() => setDividerPickerOpened(false)}
          />
        )}
      </IconContainer>
      <IconContainer>
        <CodeIcon />
      </IconContainer>
      <IconContainer onClick={() => setUrlPickerOpened(true)}>
        <LinkIcon />
        {urlPickerOpened && (
          <UrlPicker
            isPanel
            onSelect={handleSelectUrl}
            onClickOutside={() => setUrlPickerOpened(false)}
          />
        )}
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
