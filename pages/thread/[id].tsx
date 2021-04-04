import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Color } from '~/@types';
import { CategoryType, LineType, ThreadAction } from '~/@types/resources/thread';
import {
  Layout,
  CreatedDateTime,
  ButtonTask,
  LinkTask,
  Thumbnail,
  Meta,
  Category,
  Hashtag,
} from '~/molecules/thread';
import { BlockElement } from '~/molecules/thread/Block';
import { getNextBlockElement } from '~/molecules/thread/Block/helpers';

const {
  Container,
  Header,
  TaskList,
  TitleBlock,
  SubTitleBlock,
  MetaList,
  Devider,
  Contents,
} = Layout;

const ThreadPage: FC = () => {
  const router = useRouter();
  const { id, action } = router.query as { id: string; action: ThreadAction };
  const isEditMode = action === ThreadAction.EDIT;

  // mock data
  const [thread, setThread] = useState({
    id: 123,
    // thumbnailUrl: null,
    thumbnailUrl:
      'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F99B87D3359AF7F3821B671',
    title: '비사이드 협업 잘하는 방법',
    subTitle: '',
    categories: [CategoryType.DEVELOP],
    hashtags: [],
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
    createdDateTime: Date.now(),
  });

  const handleChangeThumbnail = (thumbnailUrl: string | null) => {
    console.log(thumbnailUrl);
  };

  const handleKeyPressEnterBlock = (element: BlockElement) => {
    const nextBlockElement = getNextBlockElement(element);
    if (nextBlockElement) {
      nextBlockElement.focus();
    }
  };

  return (
    <Container>
      {isEditMode ? (
        <TaskList action={ThreadAction.EDIT}>
          <ButtonTask onClick={() => router.push(`/thread/${id}`)}>취소</ButtonTask>
          <ButtonTask color={Color.PRIMARY}>등록</ButtonTask>
        </TaskList>
      ) : (
        <Header>
          <CreatedDateTime dateTime={thread.createdDateTime} />
          <TaskList>
            <LinkTask href={`/thread/${id}?action=${ThreadAction.EDIT}`}>편집</LinkTask>
            <LinkTask href="/#">토론</LinkTask>
            <LinkTask href="/#">히스토리</LinkTask>
          </TaskList>
        </Header>
      )}
      <Thumbnail url={thread.thumbnailUrl} editable={isEditMode} onChange={handleChangeThumbnail} />
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
        onChange={() => {}}
        onKeyPressEnter={handleKeyPressEnterBlock}
      />
      <MetaList>
        <tbody>
          <Meta label="직군" required>
            {thread.categories.map((categoryType) => (
              <Category key={categoryType} type={categoryType} />
            ))}
          </Meta>
          {thread.hashtags.length > 0 && (
            <Meta label="주제태그" required>
              {thread.hashtags.map((hashtag) => (
                <Hashtag key={hashtag} url="/#" title={hashtag} />
              ))}
            </Meta>
          )}
        </tbody>
      </MetaList>
      <Devider />
      <Contents>본문</Contents>
    </Container>
  );
};

export default ThreadPage;
