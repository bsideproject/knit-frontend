import { useEffect, useRef } from 'react';
import { BlockElement } from './types';

/**
 * 파라미터로 전달한 BlockElement 다음에 위치하는 BlockElement를 반환한다.
 * @param   {BlockElement} currentBlockElement - 기준 BlockElement
 * @returns {BlockElement | null} 다음 위치의 BlockElement
 */
export const getNextBlockElement = (currentBlockElement: BlockElement) => {
  const blockElements = document.querySelectorAll('div[data-block=true]');
  if (!blockElements.length) return null;

  const currentIndex = Array.from(blockElements).findIndex((blockElement) => {
    return blockElement === currentBlockElement;
  });
  if (currentIndex === -1 || blockElements.length === currentIndex + 1) return null;
  return blockElements[currentIndex + 1] as BlockElement;
};

export const useWatchRef = <T = any>(payload: T) => {
  const ref = useRef<T>(payload);

  useEffect(() => {
    ref.current = payload;
  }, [payload]);

  return ref;
};
