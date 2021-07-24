import { useRouter } from 'next/router';
import { FC } from 'react';
import { Users, UserSanction, ThreadsRegister, ThreadNew, Featured } from '~/molecules/admin';

const SubMenu: FC = () => {
  const router = useRouter();
  const { subMenu } = router.query;

  let Component;

  switch (subMenu) {
    case 'users':
      Component = Users;
      break;
    case 'user-sanction':
      Component = UserSanction;
      break;
    case 'thread-regist':
      Component = ThreadsRegister;
      break;
    case 'thread-new':
      Component = ThreadNew;
      break;
    case 'featured':
      Component = Featured;
      break;
    default:
      Component = Users;
  }

  return (
    <>
      <Component />
    </>
  );
};

export default SubMenu;
