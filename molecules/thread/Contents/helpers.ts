import {
  ContentType,
  DividerContent,
  DividerType,
  TextContent,
  ImageContent,
  UrlContent,
} from '~/@types/resources/thread';
import { generateUuid } from '~/utils/id';

export const createTextContent = (value = ''): TextContent => {
  return { contentId: generateUuid(), type: ContentType.TEXT, value };
};

export const createDividerContent = (deviderType: DividerType): DividerContent => {
  return { contentId: generateUuid(), type: ContentType.DEVIDER, deviderType };
};

export const createImageContent = ({
  url,
  represent,
}: Pick<ImageContent, 'represent' | 'url'>): ImageContent => {
  return { contentId: generateUuid(), type: ContentType.IMAGE, url, represent };
};

export const createUrlContent = (url: string, description: string): UrlContent => {
  return { contentId: generateUuid(), type: ContentType.URL, url, description };
};
