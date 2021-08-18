import { useEffect, VFC } from 'react';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { Layout, History } from '~/molecules/mypage';
import { Color, Size } from '~/@types';
import { Button } from '~/atoms/button';
import { LinkedInIcon, NextStepIcon } from '~/public/assets/icon';
import { fetcher } from '~/utils/api';

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

const myPageEndpoint = `v1/user/profile`;

type ProfileResponse = {
  email: string | null;
  github: string | null;
  introduction: string | null;
  linkedIn: string | null;
  nickname: string | null;
};

const MyPage: VFC = () => {
  const { data: profile } = useSWR<ProfileResponse | null>(myPageEndpoint, fetcher);

  return (
    <Container>
      <BackProfileContanier>
        <ProfileUpdate onClick={() => {}}>
          <Link href="/mypage/profile">
            <a>프로필 수정하기</a>
          </Link>

          <NextStepIcon />
        </ProfileUpdate>
        <Nickname>{profile?.nickname}</Nickname>

        <Content>
          3년차 디자이너 구의동뽀로로입니다. 현재 글로벌 e커머스에서 GUI디자인하고 있습니다.
          <br />
          소개글은 길면 두줄? instagram @abcdefghij_knitwiki
        </Content>

        <LinkedContent>
          {profile?.linkedIn && (
            <Link href={`https://${profile?.linkedIn}`}>
              <a>
                <LinkedInIcon />
                {profile.linkedIn}
              </a>
            </Link>
          )}

          {profile?.github && (
            <Link href={`https://${profile?.github}`}>
              <a>
                <GithubOutlined />
                {profile.github}
              </a>
            </Link>
          )}
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
