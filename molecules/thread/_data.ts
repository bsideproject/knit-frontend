import { CategoryType, ContentType, Thread } from '~/@types/resources/thread';

export default {
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
    {
      id: 1618332038575,
      type: ContentType.TEXT,
      value: `1-1. 웹 트래픽만 분석`,
    },
    {
      id: 1618332038576,
      type: ContentType.TEXT,
      value: `- 셋팅하기`,
    },
    {
      id: 1618332038577,
      type: ContentType.TEXT,
      value: `(1) Google Analytics와 Google Tag Manager 연결하기 (추천)`,
    },
    {
      id: 1618332038578,
      type: ContentType.TEXT,
      value: `분석하고자 하는 사이트에 GTM 코드를 심고, Google Tag Manager 페이지에서 내 Google Analytics 추적 ID를 연결 시킨다. 참고로, Google Analytics 추적 ID는 UA버전과 GA4 버전 둘로 나뉜다. 각각의 장단점이 있기 때문에 필자의 경우, UA, GA4 분석을 모두 사용하고 있음`,
    },
    {
      id: 1618332038579,
      type: ContentType.TEXT,
      value: `[참고] GTM 페이지에서 코드 확인하기`,
    },
    {
      id: 1618332031579,
      type: ContentType.TEXT,
      value: `Google Tag Manager 사이트 "작업공간" 페이지 상단 "GTM -XXXXXXX" 클릭하면 아래의 화면을 확인할 수 있다. 해당 코드를 분석하고자 하는 사이트에 삽입하면 됨`,
    },
    {
      id: 1618332038175,
      type: ContentType.IMAGE,
      url:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fac3b48b0-372e-4f98-b448-106ced569410%2FUntitled.png?table=block&id=ceec018e-5749-438f-9ef0-e524984fa6e1&width=3360&userId=802b7fcd-e0be-4782-9465-b56dd9eb48cd&cache=v2',
      represent: true,
    },
    {
      id: 1618332038580,
      type: ContentType.TEXT,
      value: `(2) Google Analytics (UA 또는 GA4) 코드만 심기`,
    },
    {
      id: 1618332038581,
      type: ContentType.TEXT,
      value: `다양한 분석은 필요 없고 간단하게 유입량 정도만 확인하고 싶다고 하면 GA (UA 또는 GA4) 코드만 심어도 문제 없다.`,
    },
  ],
  modifiedDateTime: Date.now(),
} as Thread;
