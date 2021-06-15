import { FC, useState, memo, useRef, MouseEventHandler, KeyboardEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { ContentEditableEvent } from 'react-contenteditable';
import { ContentType, DividerType, Thread, DesignCommandType } from '~/@types/resources/thread';
import { getCaretNumber, isDomNode } from '~/utils/dom';
import { TextBlock, CodeBlock } from '../Block';
import { createTextContent } from './helpers';
import { SidePanel, CreatedContent } from '../SidePanel';
import { Container, BlockWrapper } from './Contents.styled';
import { FocusInfo, FocusType } from '../Block/types';
import { InlinePanel } from '../InlinePanel';
import ImageBlock from '../Block/ImageBlock';
import DividerBlock from '../Block/DividerBlock';
import { useRootState } from '~/app/store';
import {
  setIsOpenPalette,
  setIsOpenAlignPanel,
  setIsOpenHeadingPanel,
  setIsOpenBackPalette,
  setIsOpenUrlPanel,
  setMemoFocusInfo,
} from './Contents.slice';

interface Props {
  isEditMode: boolean;
  contents: Thread['contents'];
  onChangeContents: (contents: Thread['contents']) => void;
}

const Contents: FC<Props> = ({ isEditMode, contents = [], onChangeContents }) => {
  const [focusInfo, setFocusInfo] = useState<{ contentId: number } & FocusInfo>();
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    isOpenPalette,
    isOpenAlignPanel,
    isOpenHeadingPanel,
    isOpenBackPalette,
    isOpenUrlPanel,
    memoFocusInfo,
    memoCaretNumber,
  } = useRootState(({ contents }) => contents);

  const handleClickEmptySpace: MouseEventHandler = (event) => {
    if (event.target !== event.currentTarget) return;

    // block이 하나도 없는 경우 text block을 생성한 뒤 focus
    if (!_.size(contents)) {
      const content = createTextContent();
      onChangeContents([content]);
      setFocusInfo({
        contentId: content.contentId,
        focusType: FocusType.LAST_CARET,
      });
      return;
    }
    // 마지막 block에 focus
    setFocusInfo({
      contentId: contents[contents.length - 1].contentId,
      focusType: FocusType.LAST_CARET,
    });
  };

  const createFocusHandler = (contentId: number) => () => {
    setFocusInfo({
      contentId,
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

  // const createChangeCodeHandler = (index: number) => (event: ContentEditableEvent) => {
  //   // const value = event.target.value ?? '';
  //   const value = document.getElementsByClassName('javascript hljs')[0]?.innerText ?? '';
  //   const content = { ...contents[index], value };
  //   onChangeContents([...contents.slice(0, index), content, ...contents.slice(index + 1)]);
  // };

  const createKeyPressHandler = (index: number): KeyboardEventHandler => (event) => {
    const { key, shiftKey, target } = event;
    const content = contents[index];
    if (key === 'Enter') {
      if (shiftKey) return;
      event.preventDefault();

      // 다음 위치에 text block을 생성한 뒤 focus
      const caretNum = getCaretNumber(target) ?? 0;
      let currContent;
      let nextContent;
      if (content.type === ContentType.TEXT) {
        let currValue = '';
        let nextValue = '';
        if (isDomNode(content.value)) {
          const parser = new DOMParser();
          const htmlNode = parser.parseFromString(content.value, 'text/html').body;

          currValue = htmlNode.innerText.slice(0, caretNum);
          nextValue = htmlNode.innerText.slice(caretNum);

          if (caretNum === 0) {
            currValue = '';
            nextValue = content.value;
          } else if (htmlNode.innerText.length === caretNum) {
            currValue = (htmlNode.firstChild as HTMLElement).outerHTML;
          } else if (content.value[caretNum] === '<') {
            currValue = (htmlNode.firstChild as HTMLElement).textContent ?? '';
            nextValue = (htmlNode.lastChild as HTMLElement).outerHTML;
          } else if (content.value[caretNum] === '>') {
            currValue = (htmlNode.lastChild as HTMLElement).textContent ?? '';
            nextValue = (htmlNode.firstChild as HTMLElement).outerHTML;
          }
        } else {
          currValue = content.value.slice(0, caretNum);
          nextValue = content.value.slice(caretNum);
        }

        currContent = {
          ...content,
          ...(caretNum !== null ? { value: currValue } : null),
        };
        nextContent = createTextContent(caretNum !== null ? nextValue : '');
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
        contentId: nextContent.contentId,
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
            contentId: updatedPrevContent.contentId,
            focusType: FocusType.DESIGNATE_CARET,
            focusCaretPos: prevContent.value.length,
          });
        } else {
          updatedPrevContent = prevContent;
          setFocusInfo({
            contentId: updatedPrevContent.contentId,
            focusType: FocusType.LAST_CARET,
          });
        }
        onChangeContents([
          ...contents.slice(0, index - 1),
          updatedPrevContent,
          ...contents.slice(index + 1),
        ]);
      } else {
        deleteCurrentContents(index);
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
        contentId: shiftKey ? contents[index - 1].contentId : contents[index + 1].contentId,
        focusType: FocusType.LAST_CARET,
      });
    }

    if (key === 'ArrowUp') {
      // 첫번째 block인 경우 pass
      if (index === 0) return;

      if (content.type === ContentType.TEXT || content.type === ContentType.CODE) {
        const caretNum = getCaretNumber(target);
        // caret이 첫번째 위치가 아닌 경우 pass
        if (caretNum !== 0 && !metaKey) return;
      }
      event.preventDefault();
      setFocusInfo({
        contentId: contents[index - 1].contentId,
        focusType: FocusType.LAST_CARET,
      });
      return;
    }

    if (key === 'ArrowDown') {
      // 마지막 block인 경우 pass
      if (index === contents.length - 1) return;

      if (content.type === ContentType.TEXT || content.type === ContentType.CODE) {
        const caretNum = getCaretNumber(target);
        // caret이 마지막 위치가 아닌 경우 pass
        if (caretNum !== content.value.length && !metaKey) return;
      }

      event.preventDefault();
      setFocusInfo({
        contentId: contents[index + 1].contentId,
        focusType: FocusType.FIRST_CARET,
      });
    }
  };

  const createChangeRepresentImageHandler = (contentId: number) => () => {
    const updatedContents = contents.map((content) => {
      if (content.type !== ContentType.IMAGE) return content;
      return { ...content, represent: content.contentId === contentId };
    });
    onChangeContents(updatedContents);
  };

  const createChangeDividerHandler = (contentId: number) => (deviderType: DividerType) => {
    const updatedContents = contents.map((content) => {
      if (content.type !== ContentType.DEVIDER) return content;
      if (content.contentId !== contentId) return content;
      return { ...content, deviderType };
    });
    onChangeContents(updatedContents);
  };

  const deleteCurrentContents = (index: number) => () => {
    const prevContent = contents[index - 1];
    setFocusInfo({
      contentId: prevContent.contentId,
      focusType: FocusType.LAST_CARET,
    });
    onChangeContents([...contents.slice(0, index - 1), prevContent, ...contents.slice(index + 1)]);
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
    if (type === DesignCommandType.BACKCOLOR) {
      dispatch(setIsOpenBackPalette(!isOpenBackPalette));
    }
    if (type === DesignCommandType.ALIGNTEXT) {
      dispatch(setIsOpenAlignPanel(!isOpenAlignPanel));
    }
    if (type === DesignCommandType.HEADING) {
      dispatch(setIsOpenHeadingPanel(!isOpenHeadingPanel));
    }
    if (type === DesignCommandType.URL) {
      dispatch(setIsOpenUrlPanel(!isOpenUrlPanel));
    }
  };

  const handleContentCreated = (createdContent: CreatedContent) => {
    if (createdContent.type === ContentType.EMOJI) {
      const { emoji } = createdContent;

      try {
        // text block에 focus되어 있는 상태로 이모티콘 추가한 경우 현재 caret 위치에 이모티콘 입력
        if (!focusInfo) throw new Error();

        const index = contents.findIndex(({ contentId }) => contentId === focusInfo.contentId);
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
          contentId: updatedContent.contentId,
          focusType: FocusType.DESIGNATE_CARET,
          focusCaretPos: caretPosNum + emoji.length,
        });
      } catch {
        // text block에 focus되어 있지 않은 경우 새 text block 생성 및 이모티콘 입력
        const content = createTextContent(emoji);
        onChangeContents(contents.concat(content));
        setFocusInfo({
          contentId: content.contentId,
          focusType: FocusType.LAST_CARET,
        });
      }
      return;
    }

    if (createdContent.type === ContentType.DEVIDER) {
      try {
        // focus 된 block이 있는 경우 다음 위치에 devider block 추가
        if (!focusInfo) throw new Error();

        const index = contents.findIndex(({ contentId }) => contentId === focusInfo.contentId);
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
          contentId: createdContent.contentId,
          focusType: FocusType.LAST_CARET,
        });
      }
      return;
    }

    if (createdContent.type === ContentType.IMAGE) {
      try {
        // focus 된 block이 있는 경우 다음 위치에 Image block 추가
        if (!focusInfo) throw new Error();

        const index = contents.findIndex(({ contentId }) => contentId === focusInfo.contentId);
        if (index === -1) throw new Error();
        onChangeContents([
          ...contents.slice(0, index + 1),
          createdContent,
          ...contents.slice(index + 1),
        ]);
      } catch {
        // focus 된 block이 없는 경우 마지막 위치에 Image block 추가
        onChangeContents(contents.concat(createdContent));
      } finally {
        setFocusInfo({
          contentId: createdContent.contentId,
          focusType: FocusType.LAST_CARET,
        });
      }
      return;
    }

    if (createdContent.type === ContentType.URL) {
      const { url, description } = createdContent;

      try {
        // text block에 focus되어 있는 상태로 URL 추가한 경우 현재 caret 위치에 URL 입력
        if (!memoFocusInfo) throw new Error();

        const index = contents.findIndex(({ contentId }) => contentId === memoFocusInfo.contentId);
        if (index === -1) throw new Error();

        const focusedContent = contents[index];
        if (focusedContent.type !== ContentType.TEXT) throw new Error();
        // const caretPosNum = getCaretNumber();
        // Todo Memo caret Postion

        if (memoCaretNumber === null) throw new Error();

        const { value } = focusedContent;
        const updatedContent = {
          ...focusedContent,
          value: `${value.slice(0, memoCaretNumber)}<a href=${url}>${description}</a>${value.slice(
            memoCaretNumber
          )}`,
        };

        onChangeContents([
          ...contents.slice(0, index),
          updatedContent,
          ...contents.slice(index + 1),
        ]);

        setFocusInfo({
          contentId: updatedContent.contentId,
          focusType: FocusType.DESIGNATE_CARET,
          focusCaretPos: memoCaretNumber + description.length,
        });
      } catch {
        // text block에 focus되어 있지 않은 경우 새 text block 생성 및 URL 입력
        const content = createTextContent(`<a href=${url}>${description}</a>`);
        onChangeContents(contents.concat(content));
        setFocusInfo({
          contentId: content.contentId,
          focusType: FocusType.LAST_CARET,
        });
      } finally {
        setMemoFocusInfo(null);
      }
      return;
    }

    console.log('keep return statement');
  };

  return (
    <Container isEditMode={isEditMode} onClick={handleClickEmptySpace} ref={containerRef}>
      {isEditMode && (
        <>
          <SidePanel focusInfo={focusInfo} onContentCreated={handleContentCreated} />
          <InlinePanel onContentWrapped={handleContentWrapped} baseElement={containerRef.current} />
        </>
      )}
      {contents?.map((content, index) => {
        switch (content.type) {
          case ContentType.TEXT:
            return (
              <BlockWrapper>
                <TextBlock
                  id={content.contentId}
                  key={content.contentId}
                  editable={isEditMode}
                  value={content.value}
                  focusInfo={content.contentId === focusInfo?.contentId ? focusInfo : null}
                  onBlur={handleBlur}
                  onFocus={createFocusHandler(content.contentId)}
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
                  key={content.contentId}
                  editable={isEditMode}
                  url={content.value}
                  focusInfo={content.contentId === focusInfo?.contentId ? focusInfo : null}
                  onBlur={handleBlur}
                  onFocus={createFocusHandler(content.contentId)}
                  onKeyDown={createKeyDownHandler(index)}
                  onKeyPress={createKeyPressHandler(index)}
                  // represent={content.represent}
                  onChangeRepresent={createChangeRepresentImageHandler(content.contentId)}
                  onDelete={deleteCurrentContents(index)}
                />
              </BlockWrapper>
            );
          case ContentType.DEVIDER:
            return (
              <BlockWrapper>
                <DividerBlock
                  key={content.contentId}
                  type={content.deviderType}
                  editable={isEditMode}
                  focusInfo={content.contentId === focusInfo?.contentId ? focusInfo : null}
                  onBlur={handleBlur}
                  onFocus={createFocusHandler(content.contentId)}
                  onKeyDown={createKeyDownHandler(index)}
                  onKeyPress={createKeyPressHandler(index)}
                  onChange={createChangeDividerHandler(content.contentId)}
                  onDelete={deleteCurrentContents(index)}
                />
              </BlockWrapper>
            );
          case ContentType.CODE:
            return (
              <BlockWrapper>
                <CodeBlock
                  key={content.contentId}
                  editable={isEditMode}
                  value={content.value}
                  focusInfo={content.contentId === focusInfo?.contentId ? focusInfo : null}
                  onBlur={handleBlur}
                  onFocus={createFocusHandler(content.contentId)}
                  onKeyDown={createKeyDownHandler(index)}
                  onKeyPress={createKeyPressHandler(index)}
                  // onChange={createChangeCodeHandler(index)}
                  onChange={() => {
                    console.log('block change');
                  }}
                  onDelete={deleteCurrentContents(index)}
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
