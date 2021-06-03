import { FC, useState } from 'react';
import { Select, Modal, Button } from 'antd';
import {
  Container,
  Content,
  Row,
  Label,
  ThreadTitle,
  TextArea,
  TagTitle,
  Tag,
  ModalTitle,
  ModalContent,
} from './ThreadNewDetail.styled';

const { Option } = Select;
const ThreadNewDetail: FC = () => {
  const [acesssModalOpened, setAcesssModalOpened] = useState(false);
  const [rejectModalOpened, setRejectModalOpened] = useState(false);

  const handleAccessClicked = () => {
    setAcesssModalOpened(false);
  };

  const handleCancelClicked = () => {
    setAcesssModalOpened(false);
    setRejectModalOpened(false);
  };

  const handleRejectClicked = () => {
    setAcesssModalOpened(false);
  };

  const handleChanged = (value: string) => {
    if (value === 'access') {
      setAcesssModalOpened(true);
    }
    if (value === 'reject') {
      setRejectModalOpened(true);
    }
  };
  const handleRejcetReasonChanged = () => {};
  return (
    <>
      <Container>
        <Content height="144">
          <Row>
            <Label>제안한 유저 :</Label> ㅅㄷㄴㅅ
          </Row>
          <Row>
            <Label>제안 등록일 :</Label>
          </Row>
          <Row>
            <Label>처리 상태 :</Label>
            <Select defaultValue="pending" style={{ width: 120 }} onChange={handleChanged}>
              <Option value="pending">대기</Option>
              <Option value="access">승인</Option>
              <Option value="reject">반려</Option>
            </Select>
          </Row>
        </Content>
        <Content height="595" paddingTop="60">
          <ThreadTitle>Docuement Title</ThreadTitle>

          <Row span={2}>
            <TagTitle>
              직군 태그
              <Tag>dsdsad</Tag>
              <Tag>dsdsad</Tag>
            </TagTitle>
          </Row>
          <Row span={2}>
            <TagTitle>
              주제 태그
              <Tag>dsdsad</Tag>
              <Tag>dsdsad</Tag>
            </TagTitle>
          </Row>

          <TextArea disabled />
        </Content>
      </Container>

      <Modal
        visible={acesssModalOpened}
        footer={[
          <Button key="back" onClick={handleCancelClicked}>
            취소
          </Button>,
          <Button key="submit" type="primary" onClick={handleAccessClicked}>
            제안 승인
          </Button>,
        ]}
      >
        <ModalTitle>이 제안을 승인하시겠습니까?</ModalTitle>
        <ModalContent>
          승인 즉시 제안한 내용이 위키에 전체 공개되며, 한 번 승인한 후에는 상태를 변경할 수
          없습니다.
        </ModalContent>
      </Modal>
      <Modal
        visible={rejectModalOpened}
        footer={[
          <Button key="back" onClick={handleCancelClicked}>
            취소
          </Button>,
          <Button
            key="submit"
            style={{ background: '#FF0000', color: 'white' }}
            onClick={handleRejectClicked}
          >
            제안 반려
          </Button>,
        ]}
      >
        <ModalTitle>이 제안을 반려하시겠습니까?</ModalTitle>
        <ModalContent>
          한 번 반려한 후에는 상태를 변경할 수 없습니다. <br />
          <br />
          사유 선택(필수)
          <br />
          <br />
          <Select
            defaultValue="choice"
            style={{ width: '100%' }}
            onChange={handleRejcetReasonChanged}
          >
            <Option value="choice">사유를 선택해주세요</Option>
            <Option value="inapposite">위키의 취지에 적합하지 않은 내용입니다.</Option>
            <Option value="overlap">유사한 내용이 이미 다른 스레드에 존재합니다.</Option>
            <Option value="free">
              기여자의 이해관계로부터 자유로운 내용으로 구성되어야 합니다.
            </Option>
            <Option value="reject">기타 (직접 입력)</Option>
          </Select>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThreadNewDetail;
