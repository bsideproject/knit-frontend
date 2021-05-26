import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
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
import axios from '~/utils/api';
import { generateUuid } from '~/utils/id';

const { Container, Header, Tasks, TitleBlock, SubTitleBlock, Metas, Divider } = Layout;

interface Props {
  id?: string | null;
  isEditMode: boolean;
}

const ThreadPage: FC<Props> = ({ id, isEditMode }) => {
  const router = useRouter();
  const [thread, setThread] = useState<Thread | null>(null);
  const [editMode, setEditMode] = useState(isEditMode);
  const { data: response } = useSWR<any>(id ? `/thread/${id}` : null, axios);

  useEffect(() => {
    if (response) {
      setThread(response.data);
    }
  }, [response, id, router]);

  const handleClickCancelEdit = useCallback(() => {
    if (id) {
      router.push(`/thread/${id}`);
      // return setThread(response.data);
    }
    return setThread(null);
  }, [id, response]);

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
      setThread({ categories: [{ categoryId: generateUuid(), value: type }] });
      return;
    }
    const { categories = [] } = thread;

    const newCategories = categories.find((category) => category.value === type)
      ? categories.filter((category) => category.value !== type)
      : categories.concat({ categoryId: generateUuid(), value: type });

    setThread({ ...thread, categories: newCategories });
  };

  const handleClickCaptureContainer: MouseEventHandler<HTMLElement> = (event) => {
    // 문서 편집 중에는 모든 링크 동작하지 않도록 처리
    if (editMode && (event.target as HTMLElement).tagName === 'A') {
      // event.preventDefault();
    }
  };

  const handleSubmit = async () => {
    if (!thread) {
      return;
    }
    const { title, thumbnailUrl } = thread;
    if (!title || !thumbnailUrl) {
      window.alert('필수 항목이 누락되었어요. 제목과 커버이미지를 등록해주세요.');
    }
    if (id) {
      try {
        await axios.post(`v1/threads/update/${id}`, { ...thread });
        setEditMode(false);
        window.alert('문서가 수정 되었어요. \n검수 후에 등록될 예정이에요');
      } catch (error) {
        console.error(error);
      }
      return;
    }

    try {
      await axios.post(`v1/threads/register`, { ...thread });
      window.alert('문서가 등록 되었어요. \n검수 후에 등록될 예정이에요');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <Container onClickCapture={handleClickCaptureContainer}>
        {editMode ? (
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
        <Cover url={thread?.thumbnailUrl} editable={editMode} onChange={handleChangeCover} />
        <TitleBlock
          openPanel={false}
          editable={editMode}
          placeholder="어떤 글을 쓰실건가요?"
          value={thread?.title}
          onChange={({ target }) => setThread({ ...thread, title: target.value })}
          onKeyPress={handleKeyPress}
        />
        <SubTitleBlock
          openPanel={false}
          editable={editMode}
          placeholder="Subtitle"
          value={thread?.subTitle}
          onChange={({ target }) => setThread({ ...thread, subTitle: target.value })}
          onKeyPress={handleKeyPress}
        />
        <Metas>
          <tbody>
            <Meta label="직군" required={editMode}>
              {Object.values(CategoryType).map((categoryType) => {
                return (
                  <Category
                    key={categoryType}
                    type={categoryType}
                    isEditMode
                    // selected={thread?.categories?.filter?.includes(categoryType)}
                    selected={
                      !!thread?.categories?.find((category) => category.value === categoryType)
                    }
                    onClick={handleClickCategory}
                  />
                );
              })}
            </Meta>
            <Meta label="주제태그" required={editMode}>
              <Tags
                isEditMode={editMode}
                tags={thread?.tags}
                onChange={(tags) => setThread((thread) => ({ ...thread, tags }))}
              />
            </Meta>
          </tbody>
        </Metas>
        <Divider />
        <Contents
          isEditMode={editMode}
          contents={thread?.contents}
          onChangeContents={(contents) => setThread((thread) => ({ ...thread, contents }))}
        />
      </Container>
    </form>
  );
};

export default ThreadPage;
