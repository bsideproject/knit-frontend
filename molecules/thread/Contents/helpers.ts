import { ContentType, TextContent } from '~/@types/resources/thread';

// mock
export const createTextContent = (value = ''): TextContent => {
  return { id: Date.now(), type: ContentType.TEXT, value };
};
