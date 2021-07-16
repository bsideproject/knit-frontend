import { IDebate, IMostViewData, ITag, IRecentlyModified } from '~/@types/db';

interface MockDataType {
  debate: ReadonlyArray<IDebate>;
  searchBanner: ReadonlyArray<ITag>;
  mostView: ReadonlyArray<IMostViewData>;
  recentlyModified: ReadonlyArray<IRecentlyModified>;
}

const mockData: MockDataType = {
  debate: [
    {
      id: 1,
      title: '여기는 타이틀 자리입니다.',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 2,
      title: '여기는 타이틀 자리입니다2',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 3,
      title: '여기는 타이틀 자리입니다3',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 4,

      title: '여기는 타이틀 자리입니다4',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 5,

      title: '두번째 캐러셀 타이틀 1',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 6,

      title: '두번째 캐러셀 타이틀 2',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 7,

      title: '두번째 캐러셀 타이틀 3',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 8,

      title: '두번째 캐러셀 타이틀 4',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 9,

      title: '세번째 캐러셀 타이틀 1',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 10,

      title: '세번째 캐러셀 타이틀 2',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 11,

      title: '세번째 캐러셀 타이틀 3',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
    {
      id: 12,

      title: '세번째 캐러셀 타이틀 4',
      content: '지금 토론진행중지금 토론진행중 지금 토론진행중 두줄까지만 보여주자요',
      commentCount: 20,
    },
  ],
  searchBanner: [
    {
      title: '#비사이드',
    },
    {
      title: '#IT위키피디아테스트문구',
    },
    {
      title: '#Share',
    },
    {
      title: '#Test ECS CI/CD',
    },
    {
      title: '#니트 가이드',
    },
  ] as const,
  mostView: [
    {
      id: 1,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      contentSummary:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 2,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      contentSummary:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 3,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      contentSummary:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 4,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      contentSummary:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 5,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      contentSummary:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 6,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      contentSummary:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
  ] as const,

  recentlyModified: [
    {
      threadId: 1,
      title:
        '타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 타이틀 몇자까지 들어가나 타이틀',
    },
    {
      threadId: 2,
      title:
        '타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 타이틀 몇자까지 들어가나 타이틀',
    },
    {
      threadId: 3,
      title:
        '타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 타이틀 몇자까지 들어가나 타이틀',
    },
    {
      threadId: 4,
      title:
        '타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 타이틀 몇자까지 들어가나 타이틀',
    },
    {
      threadId: 5,
      title:
        '타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 타이틀 몇자까지 들어가나 타이틀',
    },
    {
      threadId: 6,
      title:
        '타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 타이틀 몇자까지 들어가나 타이틀',
    },
    {
      threadId: 7,
      title:
        '타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 타이틀 몇자까지 들어가나 타이틀',
    },
    {
      threadId: 8,
      title:
        '타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 들어가나 들어 타이틀 몇자까지 타이틀 몇자까지 들어가나 타이틀',
    },
  ],
};
export default mockData;
