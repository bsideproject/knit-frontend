import { VFC } from 'react';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';
import { Layout, History } from '~/molecules/mypage';
import { Color, Size } from '~/@types';
import { Button } from '~/atoms/button';
import { LinkedInIcon, NextStepIcon } from '~/public/assets/icon';

const {
  Container,
  BackProfileContanier,
  Nickname,
  Content,
  HistoryContainer,
  Title,
  ButtonContainer,
  LinkedContent,
  ProfileUpdate,
} = Layout;
const MyPage: VFC = () => {
  return (
    <Container>
      <BackProfileContanier>
        <ProfileUpdate onClick={() => {}}>
          <Link href="/mypage/profile">
            <a>프로필 수정하기</a>
          </Link>

          <NextStepIcon />
        </ProfileUpdate>
        <Nickname>구의동 뽀로로</Nickname>

        <Content>
          3년차 디자이너 구의동뽀로로입니다. 현재 글로벌 e커머스에서 GUI디자인하고 있습니다.
          <br />
          소개글은 길면 두줄? instagram @abcdefghij_knitwiki
        </Content>

        <LinkedContent>
          <Link href="/#">
            <a>
              <LinkedInIcon />
              linkedin.com/in/hepark8
            </a>
          </Link>
          <Link href="/#">
            <a>
              <GithubOutlined />
              github.com/hepark8
            </a>
          </Link>
        </LinkedContent>
      </BackProfileContanier>

      <HistoryContainer>
        <Title>기여 히스토리</Title>

        <History />

        <ButtonContainer>
          <Button color={Color.TERTIARY} size={Size.MIDDLE}>
            이전활동 더보기
          </Button>
        </ButtonContainer>
      </HistoryContainer>
    </Container>
  );
};

export default MyPage;
