import { ContentType, DeviderContent, ImageContent } from '~/@types/resources/thread';

export type CreatedContent =
  | {
      type: ContentType.EMOJI;
      emoji: string;
    }
  | ImageContent
  | DeviderContent;
