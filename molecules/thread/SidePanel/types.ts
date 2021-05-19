import { ContentType, DividerContent, ImageContent, UrlContent } from '~/@types/resources/thread';

export type CreatedContent =
  | {
      type: ContentType.EMOJI;
      emoji: string;
    }
  | ImageContent
  | DividerContent
  | UrlContent;

export interface ImageUploadResponse {
  url: string;
}
