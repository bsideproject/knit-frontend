import { ContentType, DeviderContent, DeviderType, TextContent } from '~/@types/resources/thread';
import { generateUuid } from '~/utils/id';

export const createTextContent = (value = ''): TextContent => {
  return { id: generateUuid(), type: ContentType.TEXT, value };
};

export const createDeviderContent = (deviderType: DeviderType): DeviderContent => {
  return { id: generateUuid(), type: ContentType.DEVIDER, deviderType };
};
