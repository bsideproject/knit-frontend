import { useState, VFC } from 'react';
import { Table } from 'antd';
import useSWR from 'swr';
import axios from '~/utils/api';
import { Button } from '~/atoms/button';
import { Color, Size } from '~/@types';
import { Container, Label, Row, Search, Modal } from './Featured.styled';

const columns = [
  {
    title: '스레드 ID',
    key: 'threadId',
  },
  {
    title: '스레드 타이틀',
    key: 'nickname',
  },
  {
    title: '노출 시작 일시',
    key: 'title',
  },
];

const threadsRegisterEndPoint = '/v1/admin/waiting';

const Featured: VFC = () => {
  // Todo => response date typing
  const { data, error } = useSWR<any>(threadsRegisterEndPoint, axios);
  const [modalOpened, setModalOpened] = useState(false);

  const handleCancelClicked = () => {
    setModalOpened(false);
  };
  const handleConfirmClicked = () => {};
  const handleAddButtonClicked = () => {
    setModalOpened(true);
  };

  //   const handleSubmit = () => {};
  return (
    <Container>
      <Button color={Color.BLUE} size={Size.MIDDLE} onClick={handleAddButtonClicked}>
        + 등록
      </Button>
      <Table rowKey="userId" loading={!data && !error} dataSource={data?.data} columns={columns} />

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
