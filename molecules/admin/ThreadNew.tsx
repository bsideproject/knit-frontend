import { VFC } from 'react';
import useSWR from 'swr';
import { TableProps } from 'antd';
import { useRouter } from 'next/router';
import { AdminTableStyled } from '~/atoms/table';
import axios from '~/utils/api';
import { ThreadNewDetail } from '~/molecules/admin/detail';

const columns = [
  {
    title: '문서 제목',
    dataIndex: 'title',
    key: 'title',
    width: '50%',
  },

  {
    title: '제안 등록일',
    dataIndex: 'createdDate',
    key: 'createdDate',
  },
  {
    title: '제안한 유저',
  },
];

const threadNewEndPoint = '/v1/admin/waiting';

const ThreadNew: VFC = () => {
  // Todo => response date typing
  const { data, error } = useSWR<any>(threadNewEndPoint, axios);
  const router = useRouter();
  const { id } = router.query;
  const onRow = ({ id }: TableProps<Record<string, ''>>) => {
    return {
      onClick: () => {
        router.push(`/admin/thread-new?id=${id}`);
      },
    };
  };

  if (id) {
    return <ThreadNewDetail />;
  }
  return (
    <AdminTableStyled
      rowKey="userId"
      loading={!data && !error}
      dataSource={data?.data}
      columns={columns}
      onRow={onRow}
    />
  );
};
export default ThreadNew;
