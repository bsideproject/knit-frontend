import { VFC } from 'react';
import useSWR from 'swr';
import { TableProps } from 'antd';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
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
    render: (createdDate: Date) => dayjs(createdDate).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '제안한 유저',
  },
];

const threadNewEndPoint = '/v1/admin/waiting';

const ThreadNew: VFC = () => {
  // Todo => response date typing
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR<any>(threadNewEndPoint, axios);
  const { data: response } = useSWR<any>(id ? `/thread/${1}` : null, axios);
  const onRow = ({ id }: TableProps<Record<string, ''>>) => {
    return {
      onClick: () => {
        router.push(`/admin/thread-new?id=${id}`);
      },
    };
  };

  if (id) {
    return <ThreadNewDetail thread={response?.data} />;
  }
  return (
    <AdminTableStyled
      rowKey="id"
      loading={!data && !error}
      dataSource={data?.data}
      columns={columns}
      onRow={onRow}
    />
  );
};
export default ThreadNew;
