import { FC } from 'react';
import { useRouter } from 'next/router';

const AdminLayout: FC = () => {
  const router = useRouter();

  router.push('/admin/users');

  return null;
};

export default AdminLayout;
