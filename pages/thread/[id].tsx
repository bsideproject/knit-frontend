import { useRouter } from 'next/router';
import { FC, MouseEventHandler, useState } from 'react';
import { Color } from '~/@types';
import { CategoryType, LineType, Thread, ThreadAction } from '~/@types/resources/thread';
import {
  Layout,
  ModifiedDateTime,
  ButtonTask,
  LinkTask,
  Cover,
  Meta,
  Category,
  Tags,
} from '~/molecules/thread';
import { Block, BlockElement } from '~/molecules/thread/Block';
import { getNextBlockElement } from '~/molecules/thread/Block/helpers';
import { SidePannel } from '~/molecules/thread/SidePannel';
// import { InlinePannel } from '~/molecules/thread/InlinePannel';
import { setCaretPos } from '~/utils/dom';

const { Container, Header, Tasks, TitleBlock, SubTitleBlock, Metas, Devider, Contents } = Layout;

const ThreadPage: FC = () => {
  const router = useRouter();
  const { id, action } = router.query as { id: string; action: ThreadAction };
  const isEditMode = action === ThreadAction.EDIT;

  // mock data
  const [thread, setThread] = useState<Thread>({
    id: 123,
    thumbnailUrl: '',
    coverUrl:
      'https://storage.googleapis.com/twg-content/original_images/2560x1152_Google_MarketingPlatform.png',
    title: 'Google Marketing Platform으로 데이터 분석하기',
    subTitle: '',
    categories: [CategoryType.MARKETING, CategoryType.DATA],
    tags: [
      { id: 1, value: '퍼포먼스 마케팅' },
      { id: 2, value: 'GA' },
    ] as Thread['tags'],
    contents: [
      {
        type: LineType.TEXT,
        value:
          '동일생산과정 또는 관련된 생산과정에서 다수의 노동자가 계획적으로 협력하는 노동형태이다.',
      },
      {
        type: LineType.IMAGE,
        value: 'https://inline-image.url',
      },
      {
        type: LineType.CODE,
        format: 'javascript',
        value: "function example() { console.log('example') };",
      },
      { type: LineType.DEVIDER },
    ],
    modifiedDateTime: Date.now(),
  });

  const handleChangeCover = (thumbnailUrl: string | null) => {
    console.log(thumbnailUrl);
  };

  const handleKeyPressEnterBlock = (element: BlockElement) => {
    const nextBlockElement = getNextBlockElement(element);
    if (nextBlockElement) {
      nextBlockElement.focus();
      setCaretPos(nextBlockElement, 1);
    }
  };

  const handleClickCategory = (type: CategoryType) => {
    const { categories } = thread;
    const nextCategories = categories.includes(type)
      ? categories.filter((categoryType) => categoryType !== type)
      : categories.concat(type);

    setThread({ ...thread, categories: nextCategories });
  };

  // mock data
  const [block, setBlock] = useState('');

  const handleClickCapture: MouseEventHandler<HTMLElement> = (event) => {
    // 문서 편집 중에는 모든 링크 동작하지 않도록 처리
    if (isEditMode && (event.target as HTMLElement).tagName === 'A') {
      event.preventDefault();
    }
  };

  return (
    <Container onClickCapture={handleClickCapture}>
      {isEditMode ? (
        <Tasks action={ThreadAction.EDIT}>
          <ButtonTask onClick={() => router.push(`/thread/${id}`)}>취소</ButtonTask>
          <ButtonTask color={Color.PRIMARY}>등록</ButtonTask>
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
        multiline={false}
        placeholder="어떤 글을 쓰실건가요?"
        value={thread.title}
        onChange={(title) => setThread((thread) => ({ ...thread, title }))}
        onKeyPressEnter={handleKeyPressEnterBlock}
      />
      {(isEditMode || thread.subTitle) && (
        <SubTitleBlock
          editable={isEditMode}
          multiline={false}
          placeholder="Subtitle"
          value={thread.subTitle}
          onChange={(subTitle) => setThread((thread) => ({ ...thread, subTitle }))}
          onKeyPressEnter={handleKeyPressEnterBlock}
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
      <Devider />
      <Contents isEditMode={isEditMode}>
        {isEditMode && <SidePannel />}
        {/* <InlinePannel /> */}
        <Block value={block} editable={isEditMode} onChange={setBlock} />
      </Contents>
    </Container>
  );
};

export default ThreadPage;
