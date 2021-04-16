import { useRouter } from 'next/router';
import { FC, MouseEventHandler, useCallback, useState } from 'react';
import { ContentEditableEvent } from 'react-contenteditable';
import { Color } from '~/@types';
import { CategoryType, ContentType, Thread, ThreadAction } from '~/@types/resources/thread';
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

const { Container, Header, Tasks, TitleBlock, SubTitleBlock, Metas, Devider } = Layout;

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
      { id: 1618332036132, type: ContentType.TEXT, value: '0. Google Marketing Platform이란?' },
      {
        id: 1618332046812,
        type: ContentType.TEXT,
        value: `구글에서 제공하는 마케팅 분석 도구의 모음으로, Google 계정을 통해 가입할 수 있다.
각각 성격이 다른데, 서로 연결해서 시너지를 낼 수 있는 플랫폼임
가장 유명한 Google Analytics, Google Ads와 Google Data Studio, Google Tag Manager, Google Optimize가 있다.`,
      },
      { id: 1618332046925, type: ContentType.TEXT, value: '1. 가입하고 연결하기' },
      {
        id: 1618332038574,
        type: ContentType.TEXT,
        value: `웹 사이트를 분석하기 위해서는 각각의 플랫폼을 가입하고, 고유의 추적 ID를 연동시켜야 한다.
웹트래픽만을 분석하려면 Google Analytics와 Google Tag Manager를 연동, (간단하게 보려면 Google Analytics만 셋팅해도됨) 광고 실적까지 연동하려면 Google Ads까지 연동하면 된다.
그리고 단순 광고 실적이 아니라 A/B 테스트를 통한 실적을 확인하고 싶다면 Google Optimize를 추가로 연동할 수 있다.
그리고! 이 데이터들을 한판에 보고싶다고 하면 Google Data Studio까지 연동하면됨"`,
      },
    ],
    modifiedDateTime: Date.now(),
  });

  const handleClickCancelEdit = useCallback(() => router.push(`/thread/${id}`), []);

  const handleChangeCover = (thumbnailUrl: string | null) => {
    console.log(thumbnailUrl);
  };

  const handleKeyPress = (event: ContentEditableEvent & KeyboardEvent) => {
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

  return (
    <Container onClickCapture={handleClickCaptureContainer}>
      {isEditMode ? (
        <Tasks action={ThreadAction.EDIT}>
          <ButtonTask onClick={handleClickCancelEdit}>취소</ButtonTask>
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
      <Devider />
      <Contents
        isEditMode={isEditMode}
        contents={thread.contents}
        onChangeContents={(contents) => setThread((thread) => ({ ...thread, contents }))}
      />
    </Container>
  );
};

export default ThreadPage;
