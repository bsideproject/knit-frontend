import { useRouter } from 'next/router';
import { FC } from 'react';
import { Header, Hashtags, Body } from '~/molecules/thread';

const ThreadPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <>
      <Header />
      <Hashtags />
      <Body>여기서부터 텍스트</Body>
    </>
  );
};

export default ThreadPage;
