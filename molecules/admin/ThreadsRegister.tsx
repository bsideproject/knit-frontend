import { VFC } from 'react';
import { Table } from 'antd';
import useSWR from 'swr';

import axios from '~/utils/api';

const columns = [
  {
    title: 'No.',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '닉네임',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: '문서 제목',
    dataIndex: 'title',
    key: 'title',
  },
  // {
  //   title: '직군 태그',
  //   dataIndex: 'tags',
  //   key: 'tags',
  // },
  // {
  //   title: '주제 태그',
  //   dataIndex: 'categories',
  //   key: 'categories',
  // },
  {
    title: '현재 버전',
    dataIndex: 'lastAccessDate',
    key: 'lastAccessDate',
  },
  {
    title: '최근 수정일',
    dataIndex: 'lastAccessDate',
    key: 'lastAccessDate',
  },
  {
    title: '상태',
    dataIndex: 'status',
    key: 'status',
  },
];

const threadsRegisterEndPoint = '/v1/admin/waiting';

const ThreadsRegister: VFC = () => {
  // Todo => response date typing
  const { data, error } = useSWR<any>(threadsRegisterEndPoint, axios);
  return (
    <Table rowKey="userId" loading={!data && !error} dataSource={data?.data} columns={columns} />
  );
};
export default ThreadsRegister;
