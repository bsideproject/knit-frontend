import { ContentType, DividerContent, DividerType, TextContent } from '~/@types/resources/thread';
import { generateUuid } from '~/utils/id';

export const createTextContent = (value = ''): TextContent => {
  return { id: generateUuid(), type: ContentType.TEXT, value };
};

export const createDividerContent = (deviderType: DividerType): DividerContent => {
  return { id: generateUuid(), type: ContentType.DEVIDER, deviderType };
};