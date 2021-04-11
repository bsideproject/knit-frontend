import { useRouter } from 'next/router';
import { FC, useState } from 'react';
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
      'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F99B87D3359AF7F3821B671',
    title: '비사이드 협업 잘하는 방법',
    subTitle: '',
    categories: [CategoryType.DEVELOP],
    tags: [
      // { id: 1, title: '주제태그' },
      // { id: 2, title: '주제태그' },
      // { id: 3, title: '짧' },
      // { id: 4, title: '주제태그' },
      // { id: 5, title: '짧' },
      // { id: 6, title: '주제태그' },
      // { id: 7, title: '짧' },
      // { id: 8, title: '주제태그' },
      // { id: 9, title: '주제태그' },
      // { id: 10, title: '주제태그' },
      // { id: 11, title: '주제태그' },
      // { id: 13, title: '짧' },
      // { id: 14, title: '긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴' },
      // { id: 15, title: '주제태그' },
      // { id: 16, title: '짧' },
      // { id: 17, title: '짧' },
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

  const [block, setBlock] = useState('');

  return (
    <Container>
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
      <SubTitleBlock
        editable={isEditMode}
        multiline={false}
        placeholder="Subtitle"
        value={thread.subTitle}
        onChange={(subTitle) => setThread((thread) => ({ ...thread, subTitle }))}
        onKeyPressEnter={handleKeyPressEnterBlock}
      />
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
      <Contents>
        <SidePannel />
        {/* <InlinePannel /> */}
        <Block value={block} editable={isEditMode} onChange={setBlock} />
      </Contents>
    </Container>
  );
};

export default ThreadPage;
