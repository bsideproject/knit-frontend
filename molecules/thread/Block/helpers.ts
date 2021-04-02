import { BlockElement } from './types';

export const getNextBlockElement = (currentBlockElement: BlockElement) => {
  const blockElements = document.querySelectorAll('div[data-block=true]');
  if (!blockElements.length) return null;

  const currentIndex = Array.from(blockElements).findIndex((blockElement) => {
    return blockElement === currentBlockElement;
  });
  if (currentIndex === -1 || blockElements.length === currentIndex + 1) return null;
  return blockElements[currentIndex + 1] as BlockElement;
};
