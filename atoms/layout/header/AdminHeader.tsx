import { FC } from 'react';
import { Container } from './Header.styled';
import AdminNavigationBar from './AdminNavigationBar';

const AdminHeader: FC = () => {
  return (
    <Container>
      <AdminNavigationBar />
    </Container>
  );
};

export default AdminHeader;
