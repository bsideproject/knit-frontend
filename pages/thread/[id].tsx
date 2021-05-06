import { useRouter } from 'next/router';
import { FC, KeyboardEventHandler, MouseEventHandler, useCallback, useState } from 'react';
import { Color } from '~/@types';
import { CategoryType, Thread, ThreadAction } from '~/@types/resources/thread';
import {
  Layout,
  ModifiedDateTime,
  ButtonTask,
  LinkTask,
  Cover,
  Meta,
  Category,
  Tags,
  Contents,
} from '~/molecules/thread';
import { getNextBlockElement } from '~/molecules/thread/Block/helpers';
import threadMockData from '~/molecules/thread/_data';
// test
const { Container, Header, Tasks, TitleBlock, SubTitleBlock, Metas, Divider } = Layout;

const ThreadPage: FC = () => {
  const router = useRouter();

  const { id, action } = router.query as { id: string; action: ThreadAction };
  const isEditMode = action === ThreadAction.EDIT;

  // mock data
  const [thread, setThread] = useState<Thread>(threadMockData);

  const handleClickCancelEdit = useCallback(() => router.push(`/thread/${id}`), []);

  const handleChangeCover = (thumbnailUrl: string | null) => {
    console.log(thumbnailUrl);
  };

  const handleKeyPress: KeyboardEventHandler = (event) => {
    const { key, shiftKey, target } = event;

    if (key === 'Enter') {
      if (shiftKey) return;
      event.preventDefault();

      const nextBlockElement = getNextBlockElement(target as any);
      if (nextBlockElement) nextBlockElement.focus();
    }
  };

  const handleClickCategory = (type: CategoryType) => {
    const { categories } = thread;
    const nextCategories = categories.includes(type)
      ? categories.filter((categoryType) => categoryType !== type)
      : categories.concat(type);

    setThread({ ...thread, categories: nextCategories });
  };

  const handleClickCaptureContainer: MouseEventHandler<HTMLElement> = (event) => {
    // 문서 편집 중에는 모든 링크 동작하지 않도록 처리
    if (isEditMode && (event.target as HTMLElement).tagName === 'A') {
      event.preventDefault();
    }
  };

  const handleSubmit = () => {
    console.log(thread);
  };

  return (
    <form>
      <Container onClickCapture={handleClickCaptureContainer}>
        {isEditMode ? (
          <Tasks action={ThreadAction.EDIT}>
            <ButtonTask onClick={handleClickCancelEdit}>취소</ButtonTask>
            <ButtonTask color={Color.PRIMARY} onClick={handleSubmit}>
              등록
            </ButtonTask>
          </Tasks>
        ) : (
          <Header>
            <ModifiedDateTime dateTime={thread.modifiedDateTime} />
            <Tasks>
              <LinkTask href={`/thread/${id}?action=${ThreadAction.EDIT}`}>편집</LinkTask>
              <LinkTask href="/#">토론</LinkTask>
              <LinkTask href="/#">히스토리</LinkTask>
            </Tasks>
          </Header>
        )}
        <Cover url={thread.coverUrl} editable={isEditMode} onChange={handleChangeCover} />
        <TitleBlock
          editable={isEditMode}
          placeholder="어떤 글을 쓰실건가요?"
          value={thread.title}
          onChange={({ target }) => setThread({ ...thread, title: target.value })}
          onKeyPress={handleKeyPress}
        />
        {(isEditMode || thread.subTitle) && (
          <SubTitleBlock
            editable={isEditMode}
            placeholder="Subtitle"
            value={thread.subTitle}
            onChange={({ target }) => setThread({ ...thread, subTitle: target.value })}
            onKeyPress={handleKeyPress}
          />
        )}
        <Metas>
          <tbody>
            <Meta label="직군" required={isEditMode}>
              {isEditMode
                ? Object.values(CategoryType).map((categoryType) => {
                    return (
                      <Category
                        key={categoryType}
                        type={categoryType}
                        isEditMode
                        selected={thread.categories.includes(categoryType)}
                        onClick={handleClickCategory}
                      />
                    );
                  })
                : Object.values(CategoryType)
                    .filter((categoryType) => thread.categories.includes(categoryType))
                    .map((categoryType) => <Category key={categoryType} type={categoryType} />)}
            </Meta>
            <Meta label="주제태그" required={isEditMode}>
              <Tags
                isEditMode={isEditMode}
                tags={thread.tags}
                onChange={(tags) => setThread((thread) => ({ ...thread, tags }))}
              />
            </Meta>
          </tbody>
        </Metas>
        <Divider />
        <Contents
          isEditMode={isEditMode}
          contents={thread.contents}
          onChangeContents={(contents) => setThread((thread) => ({ ...thread, contents }))}
        />
      </Container>
    </form>
  );
};

export default ThreadPage;
