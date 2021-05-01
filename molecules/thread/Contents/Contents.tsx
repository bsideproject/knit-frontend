import { FC, useState, memo, useRef, MouseEventHandler, KeyboardEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { ContentEditableEvent } from 'react-contenteditable';
import { ContentType, DividerType, Thread, DesignCommandType } from '~/@types/resources/thread';
import { getCaretNumber } from '~/utils/dom';
import { TextBlock } from '../Block';
import { createTextContent } from './helpers';
import { SidePanel, CreatedContent } from '../SidePanel';
import { Container, BlockWrapper } from './Contents.styled';
import { FocusInfo, FocusType } from '../Block/types';
import { InlinePanel } from '../InlinePanel';
import ImageBlock from '../Block/ImageBlock';
import DividerBlock from '../Block/DividerBlock';
import { useRootState } from '~/app/store';
import { setIsOpenPalette, setIsOpenAlignPanel, setIsOpenHeadingPanel } from './Contents.slice';

interface Props {
  isEditMode: boolean;
  contents: Thread['contents'];
  onChangeContents: (contents: Thread['contents']) => void;
}

const Contents: FC<Props> = ({ isEditMode, contents, onChangeContents }) => {
  const [focusInfo, setFocusInfo] = useState<{ contentId: number } & FocusInfo>();
  const dispatch = useDispatch();

  const { isOpenPalette, isOpenAlignPanel, isOpenHeadingPanel } = useRootState(
    ({ contents }) => contents
  );

  const handleClickEmptySpace: MouseEventHandler = (event) => {
    if (event.target !== event.currentTarget) return;

    // block이 하나도 없는 경우 text block을 생성한 뒤 focus
    if (contents.length === 0) {
      const content = createTextContent();
      onChangeContents([content]);
      setFocusInfo({
        contentId: content.id,
        focusType: FocusType.LAST_CARET,
      });
      return;
    }
    // 마지막 block에 focus
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

      // 다음 위치에 text block을 생성한 뒤 focus
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
      // 첫번째 block이거나 전체 block 개수가 1개인 경우 pass
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
      // 첫번째 block & back tab인 경우 pass
      if (index === 0 && shiftKey) return;
      // 마지막 block인 경우 pass
      if (index === contents.length - 1) return;

      event.preventDefault();
      setFocusInfo({
        contentId: shiftKey ? contents[index - 1].id : contents[index + 1].id,
        focusType: FocusType.LAST_CARET,
      });
    }

    if (key === 'ArrowUp') {
      // 첫번째 block인 경우 pass
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
      // 마지막 block인 경우 pass
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

  const createChangeRepresentImageHandler = (id: number) => () => {
    const updatedContents = contents.map((content) => {
      if (content.type !== ContentType.IMAGE) return content;
      return { ...content, represent: content.id === id };
    });
    onChangeContents(updatedContents);
  };

  const createChangeDividerHandler = (id: number) => (deviderType: DividerType) => {
    const updatedContents = contents.map((content) => {
      if (content.type !== ContentType.DEVIDER) return content;
      if (content.id !== id) return content;
      return { ...content, deviderType };
    });
    onChangeContents(updatedContents);
  };

  const handleContentWrapped = (type: DesignCommandType) => {
    // if (!focusInfo) throw new Error();

    if (type === DesignCommandType.BOLD) {
      document.execCommand('bold');
    }
    if (type === DesignCommandType.ITALIC) {
      document.execCommand('italic');
    }
    if (type === DesignCommandType.UNDERLINE) {
      document.execCommand('underline');
    }
    if (type === DesignCommandType.LINETHROUGH) {
      document.execCommand('strikeThrough');
    }
    if (type === DesignCommandType.FONTCOLOR) {
      dispatch(setIsOpenPalette(!isOpenPalette));
    }
    if (type === DesignCommandType.ALIGNTEXT) {
      dispatch(setIsOpenAlignPanel(!isOpenAlignPanel));
    }

    if (type === DesignCommandType.HEADING) {
      dispatch(setIsOpenHeadingPanel(!isOpenHeadingPanel));
    }
  };

  const handleContentCreated = (createdContent: CreatedContent) => {
    if (createdContent.type === ContentType.EMOJI) {
      const { emoji } = createdContent;

      try {
        // text block에 focus되어 있는 상태로 이모티콘 추가한 경우 현재 caret 위치에 이모티콘 입력
        if (!focusInfo) throw new Error();

        const index = contents.findIndex(({ id }) => id === focusInfo.contentId);
        if (index === -1) throw new Error();

        const focusedContent = contents[index];
        if (focusedContent.type !== ContentType.TEXT) throw new Error();

        const caretPosNum = getCaretNumber();
        if (caretPosNum === null) throw new Error();

        const { value } = focusedContent;
        const updatedContent = {
          ...focusedContent,
          value: `${value.slice(0, caretPosNum)}${emoji}${value.slice(caretPosNum)}`,
        };

        onChangeContents([
          ...contents.slice(0, index),
          updatedContent,
          ...contents.slice(index + 1),
        ]);
        setFocusInfo({
          contentId: updatedContent.id,
          focusType: FocusType.DESIGNATE_CARET,
          focusCaretPos: caretPosNum + emoji.length,
        });
      } catch {
        // text block에 focus되어 있지 않은 경우 새 text block 생성 및 이모티콘 입력
        const content = createTextContent(emoji);
        onChangeContents(contents.concat(content));
        setFocusInfo({
          contentId: content.id,
          focusType: FocusType.LAST_CARET,
        });
      }
      return;
    }

    if (createdContent.type === ContentType.DEVIDER) {
      try {
        // focus 된 block이 있는 경우 다음 위치에 devider block 추가
        if (!focusInfo) throw new Error();

        const index = contents.findIndex(({ id }) => id === focusInfo.contentId);
        if (index === -1) throw new Error();

        onChangeContents([
          ...contents.slice(0, index + 1),
          createdContent,
          ...contents.slice(index + 1),
        ]);
      } catch {
        // focus 된 block이 없는 경우 마지막 위치에 devider block 추가
        onChangeContents(contents.concat(createdContent));
      } finally {
        setFocusInfo({
          contentId: createdContent.id,
          focusType: FocusType.LAST_CARET,
        });
      }
      return;
    }

    console.log('keep return statement');
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container isEditMode={isEditMode} onClick={handleClickEmptySpace} ref={containerRef}>
      {isEditMode && <SidePanel onContentCreated={handleContentCreated} />}
      {isEditMode && (
        <InlinePanel onContentWrapped={handleContentWrapped} baseElement={containerRef.current} />
      )}
      {contents.map((content, index) => {
        switch (content.type) {
          case ContentType.TEXT:
            return (
              <BlockWrapper>
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
              </BlockWrapper>
            );
          case ContentType.IMAGE:
            return (
              <BlockWrapper>
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
                  onChangeRepresent={createChangeRepresentImageHandler(content.id)}
                />
              </BlockWrapper>
            );
          case ContentType.DEVIDER:
            return (
              <BlockWrapper>
                <DividerBlock
                  key={content.id}
                  type={content.deviderType}
                  editable={isEditMode}
                  focusInfo={content.id === focusInfo?.contentId ? focusInfo : null}
                  onBlur={handleBlur}
                  onFocus={createFocusHandler(content.id)}
                  onKeyDown={createKeyDownHandler(index)}
                  onKeyPress={createKeyPressHandler(index)}
                  onChange={createChangeDividerHandler(content.id)}
                />
              </BlockWrapper>
            );
          default:
            return null;
        }
      })}
    </Container>
  );
};

export default memo<FC<Props>>(Contents);
