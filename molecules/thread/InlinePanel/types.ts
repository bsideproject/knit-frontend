import { ContentType, DividerContent, ImageContent } from '~/@types/resources/thread';

export type CreatedContent =
  | {
      type: ContentType.EMOJI;
      emoji: string;
    }
  | ImageContent
  | DividerContent;

export type CaretPixel = {
  top: number;
  left: number;
};

export interface PanelStyles {
  color: string | null;
  size: string | null;
}
