import { VFC } from 'react';
import { Table } from 'antd';
import useSWR from 'swr';

import axios from '~/utils/api';

//  legacy ..
// const columns = [
//   {
//     title: '닉네임',
//     dataIndex: 'nickname',
//     key: 'nickname',
//   },
//   {
//     title: 'User ID',
//     dataIndex: 'userId',
//     key: 'userId',
//   },
//   {
//     title: '문서 기여 횟수',
//     dataIndex: 'threadCount',
//     key: 'threadCount',
//   },
//   {
//     title: '토론 기여 횟수',
//     dataIndex: 'debateCount',
//     key: 'debateCount',
//   },
//   {
//     title: '가입 일시',
//     dataIndex: 'createdDate',
//     key: 'createdDate',
//   },
//   {
//     title: '최종 접속일',
//     dataIndex: 'lastAccessDate',
//     key: 'lastAccessDate',
//   },
//   {
//     title: '상태',
//     dataIndex: 'status',
//     key: 'status',
//   },
// ];
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
  console.log(data.data);
  return (
    <Table rowKey="userId" loading={!data && !error} dataSource={data?.data} columns={columns} />
  );
};
export default ThreadsRegister;
