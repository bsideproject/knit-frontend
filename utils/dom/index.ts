/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */

import { useEffect, useRef } from 'react';

/**
 * get caret pixel position
 */
export const getCaretPixel = (): DOMRect | null => {
  const selection = document.getSelection();
  if (!selection) return null;

  const { startOffset, endOffset, startContainer } = selection.getRangeAt(0);
  if (startOffset === endOffset) return null;

  const range = document.createRange();
  range.setStart(startContainer, startOffset);
  range.setEnd(startContainer, startOffset + 1);
  return range.getBoundingClientRect();
};

/**
 * get caret position
 * @returns {number}
 */
export const getCaretNumber = (target: any): number | null => {
  // for texterea/input element
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
    return target.selectionStart;
  }
  // for contentedit field
  if (target instanceof HTMLDivElement && target.contentEditable) {
    target.focus();

    const selection = document.getSelection();
    if (!selection) return null;

    let _range;
    try {
      _range = selection.getRangeAt(0);
    } catch {
      return null;
    }

    const range = _range.cloneRange();
    range.selectNodeContents(target);
    range.setEnd(_range.endContainer, _range.endOffset);
    return range.toString().length;
  }
  return null;
};

/**
 * set caret position
 * @param {number} pos caret position
 */
export const setCaretPos = (
  target: HTMLDivElement | HTMLInputElement | HTMLTextAreaElement,
  pos: number
) => {
  // for texterea/input element
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
    target.setSelectionRange(pos, pos);
  }
  // for contentedit field
  if (target && target.contentEditable) {
    target.focus();
    const textNode = target.childNodes[0];
    if (textNode) {
      const selection = window.getSelection();
      if (!selection) return;
      const range = document.createRange();
      range.setStart(textNode, pos);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
};

/**
 * element 외부 클릭 감지 custom hook
 * @param   callback    외부 클릭 시 호출한 이벤트 핸들러
 * @param   deps        핸들러 갱신 dependency list
 * @returns element ref
 */
export const useOnClickOutside = <T extends HTMLElement>(
  callback: (event: MouseEvent) => void,
  deps: any[] = []
) => {
  const elemRef = useRef<T>(null);

  useEffect(() => {
    function handleClickBody(event: MouseEvent) {
      if (!callback || !elemRef.current) return;
      if (!(event.target instanceof Node)) return;
      if (elemRef.current.contains(event.target)) return;
      callback(event);
    }

    document.body.addEventListener('mousedown', handleClickBody);
    return () => {
      document.body.removeEventListener('mousedown', handleClickBody);
    };
  }, deps);

  return elemRef;
};
