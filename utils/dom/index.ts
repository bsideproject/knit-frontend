/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */

import { useEffect, useRef } from 'react';
import { FocusType } from '~/molecules/thread/Block';

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
export const getCaretNumber = (target?: any): number | null => {
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
  try {
    return document.getSelection()?.getRangeAt(0)?.endOffset ?? null;
  } catch {
    return null;
  }
};

/**
 * set caret position
 * @param {number} pos caret position
 */
export const setCaretPos = (
  target: HTMLDivElement | HTMLInputElement | HTMLTextAreaElement,
  focustType: FocusType.FIRST_CARET | FocusType.LAST_CARET
) => {
  // for texterea/input element
  // if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
  //   target.setSelectionRange(pos, pos);
  // }

  // for contentedit field
  if (target && target.contentEditable) {
    target.focus();

    const selection = window.getSelection();
    if (!selection) return;

    try {
      const range = document.createRange();

      let node;
      let position;
      if (focustType === FocusType.FIRST_CARET) {
        node = target.firstChild as ChildNode;
        position = 0;
      }
      if (focustType === FocusType.LAST_CARET) {
        node = target.lastChild as ChildNode;
        position = node?.textContent?.length;
        // TODO caret position for Code format
        // node = target.childNodes[0].lastChild.lastChild;
        // position = node?.textContent?.length - 1;
      }

      if (node && position) {
        range.setStart(node, position);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } catch (error) {
      console.error(error);
    }
    // }

    // document.getElementsByClassName('hljs-comment')[2].innerText.length
  }
};

/**
 * element 외부 클릭 감지 custom hook
 * @param   callback    외부 클릭 시 호출한 이벤트 핸들러
 * @param   deps        핸들러 갱신 dependency list
 * @returns element ref
 */
export const useOnClickOutside = <T extends HTMLElement>(
  callback?: (event: MouseEvent) => void,
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

    document.addEventListener('click', handleClickBody);
    return () => {
      document.removeEventListener('click', handleClickBody);
    };
  }, deps);

  return elemRef;
};

export const findSelectionBlockNode = (): HTMLElement | null => {
  let selectionNode = document.getSelection()?.getRangeAt(0).startContainer as
    | HTMLElement
    | undefined
    | null;
  for (let i = 0; i < 10; i += 1) {
    selectionNode = selectionNode?.parentNode as HTMLElement;
    if (selectionNode?.dataset?.block) {
      return selectionNode;
    }
  }
  return null;
};

export const isDomNode = (domString: string) => {
  const doc = new DOMParser().parseFromString(domString, 'text/html');
  return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
};
