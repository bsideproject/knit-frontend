import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
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
// import axios from '~/utils/api';

const { Container, Header, Tasks, TitleBlock, SubTitleBlock, Metas, Divider } = Layout;

interface Props {
  id?: string | null;
  isEditMode: boolean;
}
const ThreadPage: FC<Props> = ({ id, isEditMode }) => {
  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    if (id) {
      setThread(threadMockData);
    }
  }, [id]);

  const handleClickCancelEdit = useCallback(() => setThread(null), []);

  const handleChangeCover = (thumbnailUrl: string | null) => {
    setThread({ ...thread, thumbnailUrl });
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
    if (!thread) {
      setThread({ categories: [type] });
      return;
    }
    const { categories = [] } = thread;

    const nextCategories = categories.includes(type)
      ? categories.filter((categoryType) => categoryType !== type)
      : categories.concat(type);
    setThread({ ...thread, categories: nextCategories });
  };

  const handleClickCaptureContainer: MouseEventHandler<HTMLElement> = (event) => {
    // 문서 편집 중에는 모든 링크 동작하지 않도록 처리
    if (isEditMode && (event.target as HTMLElement).tagName === 'A') {
      // event.preventDefault();
    }
  };

  const handleSubmit = async () => {
    console.log(thread);

    // const formData = new FormData();

    // const test = (await axios.post(`v1/threads/register`, { data: thread })) as any;
    // console.log(test);
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
            <ModifiedDateTime dateTime={thread?.modifiedDateTime} />
            <Tasks>
              <LinkTask href={`/thread/${id}?action=${ThreadAction.EDIT}`}>편집</LinkTask>
              <LinkTask href="/#">토론</LinkTask>
              <LinkTask href="/#">히스토리</LinkTask>
            </Tasks>
          </Header>
        )}
        <Cover url={thread?.thumbnailUrl} editable={isEditMode} onChange={handleChangeCover} />
        <TitleBlock
          openPanel={false}
          editable={isEditMode}
          placeholder="어떤 글을 쓰실건가요?"
          value={thread?.title}
          onChange={({ target }) => setThread({ ...thread, title: target.value })}
          onKeyPress={handleKeyPress}
        />
        <SubTitleBlock
          openPanel={false}
          editable={isEditMode}
          placeholder="Subtitle"
          value={thread?.subTitle}
          onChange={({ target }) => setThread({ ...thread, subTitle: target.value })}
          onKeyPress={handleKeyPress}
        />
        <Metas>
          <tbody>
            <Meta label="직군" required={isEditMode}>
              {Object.values(CategoryType).map((categoryType) => {
                return (
                  <Category
                    key={categoryType}
                    type={categoryType}
                    isEditMode
                    selected={thread?.categories?.includes(categoryType)}
                    onClick={handleClickCategory}
                  />
                );
              })}
            </Meta>
            <Meta label="주제태그" required={isEditMode}>
              <Tags
                isEditMode={isEditMode}
                tags={thread?.tags}
                onChange={(tags) => setThread((thread) => ({ ...thread, tags }))}
              />
            </Meta>
          </tbody>
        </Metas>
        <Divider />
        <Contents
          isEditMode={isEditMode}
          contents={thread?.contents}
          onChangeContents={(contents) => setThread((thread) => ({ ...thread, contents }))}
        />
      </Container>
    </form>
  );
};

export default ThreadPage;
