import { FC, memo, MouseEventHandler, useState } from 'react';
import { ContentEditableEvent } from 'react-contenteditable';
import { ContentType, TextContent, Thread } from '~/@types/resources/thread';
import { Block } from '../Block';
import { createTextContent } from './helpers';
import { SidePannel } from '../SidePannel';
import { Container } from './Contents.styled';
import { FocusInfo, FocusType } from '../Block/types';
import { getCaretPos } from '~/utils/dom';

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

  const createKeyPressHandler = (index: number) => (
    event: ContentEditableEvent & KeyboardEvent
  ) => {
    const { key, shiftKey, target } = event;

    if (key === 'Enter') {
      if (shiftKey) return;
      event.preventDefault();

      // 다음 위치에 text content를 생성한 뒤 focus
      const caretPos = getCaretPos(target);
      const currOrigContent = contents[index] as TextContent;
      const currContent = {
        ...currOrigContent,
        ...(caretPos !== null ? { value: currOrigContent.value.slice(0, caretPos) } : null),
      };
      const nextContent = createTextContent(
        caretPos !== null ? currOrigContent.value.slice(caretPos) : ''
      );
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

  const createKeyDownHandler = (index: number) => (event: ContentEditableEvent & KeyboardEvent) => {
    const { key, shiftKey, metaKey, target } = event;

    if (key === 'Backspace') {
      // 첫번째 content인 경우 pass
      if (index === 0) return;
      // content가 1개인 경우 pass
      if (contents.length === 1) return;

      const caretPos = getCaretPos(target);
      // caret이 첫번째 위치가 아닌 경우 pass
      if (caretPos !== 0) return;

      // content 제거 및 이전 or 다음 content focus
      const currOrigContent = contents[index] as TextContent;
      const prevOrigContent = contents[index - 1] as TextContent;
      const prevContent = {
        ...prevOrigContent,
        ...(caretPos !== null
          ? { value: `${prevOrigContent.value}${currOrigContent.value}` }
          : null),
      };
      onChangeContents([
        ...contents.slice(0, index - 1),
        prevContent,
        ...contents.slice(index + 1),
      ]);
      setFocusInfo({
        contentId: prevContent.id,
        focusType: FocusType.DESIGNATE_CARET,
        focusCaretPos: prevOrigContent.value.length,
      });
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

      const caretPos = getCaretPos(target);

      // caret이 첫번째 위치가 아닌 경우 pass
      if (caretPos !== 0 && !metaKey) return;

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

      const caretPos = getCaretPos(target);
      const content = contents[index] as TextContent;

      // caret이 마지막 위치가 아닌 경우 pass
      if (caretPos !== content.value.length && !metaKey) return;

      event.preventDefault();
      setFocusInfo({
        contentId: contents[index + 1].id,
        focusType: FocusType.FIRST_CARET,
      });
    }
  };

  return (
    <Container isEditMode={isEditMode} onClick={handleClickEmptySpace}>
      {isEditMode && <SidePannel />}
      {/* {isEditMode && <InlinePannel />} */}
      {contents.map((content, index) => {
        switch (content.type) {
          case ContentType.TEXT:
            return (
              <Block
                key={content.id}
                editable={isEditMode}
                value={content.value}
                focusInfo={content.id === focusInfo?.contentId ? focusInfo : undefined}
                onFocus={createFocusHandler(content.id)}
                onBlur={handleBlur}
                onChange={createChangeHandler(index)}
                onKeyPress={createKeyPressHandler(index)}
                onKeyDown={createKeyDownHandler(index)}
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
