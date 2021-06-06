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

export const createImageContent = ({ value }: Pick<ImageContent, 'value'>): ImageContent => {
  return { contentId: generateUuid(), type: ContentType.IMAGE, value };
};

export const createUrlContent = (url: string, description: string): UrlContent => {
  return { contentId: generateUuid(), type: ContentType.URL, url, description };
};
