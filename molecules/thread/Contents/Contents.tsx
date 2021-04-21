import { FC, useState, memo, useRef, MouseEventHandler, KeyboardEventHandler } from 'react';
import { ContentEditableEvent } from 'react-contenteditable';
import { ContentType, Thread } from '~/@types/resources/thread';
import { getCaretNumber } from '~/utils/dom';
import { TextBlock } from '../Block';
import { createTextContent } from './helpers';
import { SidePannel } from '../SidePannel';
import { Container } from './Contents.styled';
import { FocusInfo, FocusType } from '../Block/types';
import { InlinePannel } from '../InlinePannel';
import ImageBlock from '../Block/ImageBlock';

interface Props {
  isEditMode: boolean;
  contents: Thread['contents'];
  onChangeContents: (contents: Thread['contents']) => void;
}

const Contents: FC<Props> = ({ isEditMode, contents, onChangeContents }) => {
  const [focusInfo, setFocusInfo] = useState<{ contentId: number } & FocusInfo>();

  const handleClickEmptySpace: MouseEventHandler = (event) => {
    if (event.target !== event.currentTarget) return;

    // contents가 하나도 없는 경우 text content를 생성한 뒤 focus
    if (contents.length === 0) {
      const content = createTextContent();
      onChangeContents([content]);
      setFocusInfo({
        contentId: content.id,
        focusType: FocusType.LAST_CARET,
      });
      return;
    }
    // 마지막 content에 focus
    setFocusInfo({
      contentId: contents[contents.length - 1].id,
      focusType: FocusType.LAST_CARET,
    });
  };

  const createFocusHandler = (id: number) => () => {
    setFocusInfo({
      contentId: id,
      focusType: FocusType.PASSIVE,
    });
  };

  const handleBlur = () => {
    setFocusInfo(undefined);
  };

  const createChangeHandler = (index: number) => (event: ContentEditableEvent) => {
    const value = event.target.value ?? '';
    const content = { ...contents[index], value };
    onChangeContents([...contents.slice(0, index), content, ...contents.slice(index + 1)]);
  };

  const createKeyPressHandler = (index: number): KeyboardEventHandler => (event) => {
    const { key, shiftKey, target } = event;
    const content = contents[index];

    if (key === 'Enter') {
      if (shiftKey) return;
      event.preventDefault();

      // 다음 위치에 text content를 생성한 뒤 focus
      const caretNum = getCaretNumber(target);
      let currContent;
      let nextContent;
      if (content.type === ContentType.TEXT) {
        currContent = {
          ...content,
          ...(caretNum !== null ? { value: content.value.slice(0, caretNum) } : null),
        };
        nextContent = createTextContent(caretNum !== null ? content.value.slice(caretNum) : '');
      } else {
        currContent = content;
        nextContent = createTextContent();
      }
      onChangeContents([
        ...contents.slice(0, index),
        currContent,
        nextContent,
        ...contents.slice(index + 1),
      ]);
      setFocusInfo({
        contentId: nextContent.id,
        focusType: FocusType.FIRST_CARET,
      });
    }
  };

  const createKeyDownHandler = (index: number): KeyboardEventHandler => (event) => {
    const { key, shiftKey, metaKey, target } = event;
    const content = contents[index];

    if (key === 'Backspace') {
      // 첫번째 content이거나 전체 contents가 1개인 경우 pass
      if (index === 0 || contents.length === 1) return;

      const prevContent = contents[index - 1];

      if (content.type === ContentType.TEXT) {
        // caret이 첫번째 위치가 아닌 경우 pass
        const caretNum = getCaretNumber(target);
        if (caretNum !== 0) return;

        let updatedPrevContent;
        if (prevContent.type === ContentType.TEXT) {
          updatedPrevContent = {
            ...prevContent,
            value: `${prevContent.value}${content.value}`,
          };
          setFocusInfo({
            contentId: updatedPrevContent.id,
            focusType: FocusType.DESIGNATE_CARET,
            focusCaretPos: prevContent.value.length,
          });
        } else {
          updatedPrevContent = prevContent;
          setFocusInfo({
            contentId: updatedPrevContent.id,
            focusType: FocusType.LAST_CARET,
          });
        }
        onChangeContents([
          ...contents.slice(0, index - 1),
          updatedPrevContent,
          ...contents.slice(index + 1),
        ]);
      } else {
        setFocusInfo({
          contentId: prevContent.id,
          focusType: FocusType.LAST_CARET,
        });
        onChangeContents([
          ...contents.slice(0, index - 1),
          prevContent,
          ...contents.slice(index + 1),
        ]);
      }
      return;
    }

    if (key === 'Tab') {
      // 첫번째 content & back tab인 경우 pass
      if (index === 0 && shiftKey) return;
      // 마지막 content인 경우 pass
      if (index === contents.length - 1) return;

      event.preventDefault();
      setFocusInfo({
        contentId: shiftKey ? contents[index - 1].id : contents[index + 1].id,
        focusType: FocusType.LAST_CARET,
      });
    }

    if (key === 'ArrowUp') {
      // 첫번째 content인 경우 pass
      if (index === 0) return;

      if (content.type === ContentType.TEXT) {
        const caretNum = getCaretNumber(target);
        // caret이 첫번째 위치가 아닌 경우 pass
        if (caretNum !== 0 && !metaKey) return;
      }

      event.preventDefault();
      setFocusInfo({
        contentId: contents[index - 1].id,
        focusType: FocusType.LAST_CARET,
      });
      return;
    }

    if (key === 'ArrowDown') {
      // 마지막 content인 경우 pass
      if (index === contents.length - 1) return;

      if (content.type === ContentType.TEXT) {
        const caretNum = getCaretNumber(target);
        // caret이 마지막 위치가 아닌 경우 pass
        if (caretNum !== content.value.length && !metaKey) return;
      }

      event.preventDefault();
      setFocusInfo({
        contentId: contents[index + 1].id,
        focusType: FocusType.FIRST_CARET,
      });
    }
  };

  const createChangeRepresentHandler = (id: number) => () => {
    const updatedContents = contents.map((content) => {
      if (content.type !== ContentType.IMAGE) return content;
      return { ...content, represent: content.id === id };
    });
    onChangeContents(updatedContents);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container isEditMode={isEditMode} onClick={handleClickEmptySpace} ref={containerRef}>
      {isEditMode && <SidePannel />}
      {isEditMode && <InlinePannel baseElement={containerRef.current} />}
      {contents.map((content, index) => {
        switch (content.type) {
          case ContentType.TEXT:
            return (
              <TextBlock
                key={content.id}
                editable={isEditMode}
                value={content.value}
                focusInfo={content.id === focusInfo?.contentId ? focusInfo : null}
                onBlur={handleBlur}
                onFocus={createFocusHandler(content.id)}
                onKeyDown={createKeyDownHandler(index)}
                onKeyPress={createKeyPressHandler(index)}
                onChange={createChangeHandler(index)}
              />
            );
          case ContentType.IMAGE:
            return (
              <ImageBlock
                key={content.id}
                editable={isEditMode}
                url={content.url}
                focusInfo={content.id === focusInfo?.contentId ? focusInfo : null}
                onBlur={handleBlur}
                onFocus={createFocusHandler(content.id)}
                onKeyDown={createKeyDownHandler(index)}
                onKeyPress={createKeyPressHandler(index)}
                represent={content.represent}
                onChangeRepresent={createChangeRepresentHandler(content.id)}
              />
            );
          default:
            return null;
        }
      })}
    </Container>
  );
};

export default memo<FC<Props>>(Contents);
