import { FC } from 'react';
import { AdminWrapper } from './AdminContainer.styled';

interface AdminContainerProps {
  className?: string;
}

const AdminContainer: FC<AdminContainerProps> = ({ children, className }) => {
  return <AdminWrapper className={className}>{children}</AdminWrapper>;
};
export default AdminContainer;
