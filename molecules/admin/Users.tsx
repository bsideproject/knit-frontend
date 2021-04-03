import { Table } from 'antd';

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
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '최종 접속일',
    dataIndex: 'lastAccessDate',
    key: 'lastAccessDate',
  },
  {
    title: '상태',
    dataIndex: 'state',
    key: 'state',
  },
];

const SearchBanner = () => {
  return <Table rowKey="userId" dataSource={dataSource} columns={columns} />;
};
export default SearchBanner;
