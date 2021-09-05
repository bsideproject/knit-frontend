import { useState, VFC } from 'react';
import useSWR from 'swr';
import dayjs from 'dayjs';
import axios, { fetcher } from '~/utils/api';
import { Button } from '~/atoms/button';
import { Color, Size } from '~/@types';
import { Container, Label, Row, Search, Modal, Table } from './Featured.styled';

const columns = [
  {
    key: 'id',
    dataIndex: 'id',
    title: '스레드 ID',
  },
  {
    key: 'title',
    dataIndex: 'title',
    title: '스레드 타이틀',
  },
  {
    key: 'subTitle',
    dataIndex: 'subTitle',
    title: '부제목',
  },
  {
    key: 'nickname',
    dataIndex: 'nickname',
    title: '닉네임',
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: '상태',
  },
  {
    key: 'createdDate',
    dataIndex: 'createdDate',
    title: '생성 날짜',
    type: 'datetime',
  },
];

interface GetFeaturedResponse {
  threadId: number;
  title: string;
  content: string;
}

const getAllThreadEndpoint = '/v1/admin/all';
const getFeaturedThreadEndpoint = 'v1/home/featured';

const Featured: VFC = () => {
  const { data, error } = useSWR<any>(getAllThreadEndpoint, fetcher);
  const { data: featured } = useSWR<any>(getFeaturedThreadEndpoint, fetcher);
  const [modalOpened, setModalOpened] = useState(false);

  const handleCancelClicked = () => {
    setModalOpened(false);
  };
  const handleConfirmClicked = () => {};
  const handleAddButtonClicked = () => {
    setModalOpened(true);
  };

  return (
    <Container>
      <Button color={Color.BLUE} size={Size.MIDDLE} onClick={handleAddButtonClicked}>
        + 등록
      </Button>
      <Table
        rowKey="id"
        rowClassName={(record: any, index) =>
          record.id === featured?.threadId ? 'table-featured' : 'table-row-light'
        }
        loading={!data && !error}
        dataSource={data || null}
        columns={columns}
      />

      <Modal
        visible={modalOpened}
        footer={[
          <Button key="back" color={Color.GREY} onClick={handleCancelClicked}>
            취소
          </Button>,
          <Button key="submit" color={Color.BLUE} onClick={handleConfirmClicked}>
            등록
          </Button>,
        ]}
        title="Featured 할 스레드 등록"
      >
        <Row>
          <Label>스레드 ID</Label>
          <Search placeholder="Featured에 노출할 스레드의 ID를 입력해주세요" size="large" />
        </Row>
      </Modal>
    </Container>
  );
};
export default Featured;
