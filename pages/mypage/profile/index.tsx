import { VFC } from 'react';

import { Layout } from '~/molecules/mypage';

import { UserInfo, UserWithdrawl } from '~/molecules/mypage/profile';

const { Container, Title } = Layout;
// hi
const Profile: VFC = () => {
  return (
    <Container marginTop="60px">
      <Title>프로필 수정</Title>

      <UserInfo />

      <UserWithdrawl />
    </Container>
  );
};

export default Profile;
