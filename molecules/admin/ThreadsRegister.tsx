import { VFC } from 'react';
import { Table } from 'antd';
import useSWR from 'swr';

import axios from '~/utils/api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dataSource = [
  {
    nickname: 'Lindsey Stroud',
    userId: 1238104,
    threadCount: 10,
    debateCount: 2,
    createdAt: '2021/03/31',
    lastAccessDate: '2021/04/03',
    state: 'active',
  },
  {
    nickname: 'John',
    userId: 1238105,
    threadCount: 5,
    debateCount: 1,
    createdAt: '2021/03/31',
    lastAccessDate: '2021/04/10',
    state: 'active',
  },
];

const columns = [
  {
    title: '닉네임',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: 'User ID',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '문서 기여 횟수',
    dataIndex: 'threadCount',
    key: 'threadCount',
  },
  {
    title: '토론 기여 횟수',
    dataIndex: 'debateCount',
    key: 'debateCount',
  },
  {
    title: '가입 일시',
    dataIndex: 'createdDate',
    key: 'createdDate',
  },
  {
    title: '최종 접속일',
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
  const { data } = useSWR<any>(threadsRegisterEndPoint, axios);

  return <Table rowKey="userId" loading={!data} dataSource={data} columns={columns} />;
};
export default ThreadsRegister;
