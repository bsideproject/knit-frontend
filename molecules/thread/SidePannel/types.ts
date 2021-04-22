import { ContentType, DividerContent, ImageContent } from '~/@types/resources/thread';

export type CreatedContent =
  | {
      type: ContentType.EMOJI;
      emoji: string;
    }
  | ImageContent
  | DividerContent;
