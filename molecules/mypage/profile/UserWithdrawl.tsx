import { useState, VFC } from 'react';
import { Color, Size } from '~/@types';
import { SelectInput, Checkbox } from '~/atoms/field';
import { Box, Title, Content, Label, Row, WithdrawlButton } from './UserWithdrawl.styled';
import { Accordion } from '~/atoms/accordion';

const reasonOptions = [
  { label: '사용 빈도가 낮아요', value: '사용 빈도가 낮아요' },
  { label: '개인정보가 걱정돼요', value: '개인정보가 걱정돼요' },
  { label: '다른 계정을 사용할래요', value: '다른 계정을 사용할래요' },
];
const UserWithdrawl: VFC = () => {
  const [confirmCheck, setConfirmCheck] = useState(false);
  return (
    <Box>
      <Title>회원 탈퇴 </Title>

      <Content>
        <Accordion>
          <Row>
            <Label>사유</Label>
            <SelectInput
              options={reasonOptions}
              description="10글자 이내 영문 대소문자, 한글, 숫자"
              placeholder="탈퇴 사유를 입력해주세요."
            />
          </Row>
          <Row>
            이렇게 떠나신다니 아쉬워요. 탈퇴 신청 전에 아래의 내용을 꼭 확인해주세요.
            <br /> - 탈퇴 시 계정 및 아래의 서비스 이용 기록이 모두 삭제되며, 복구가 불가능합니다.
            <br /> &nbsp;&nbsp;- 내 프로필
            <br />
            &nbsp;&nbsp;- 받은 알림
            <br />
            &nbsp;&nbsp;- &apos;도움됐어요&apos; 누른 기록
            <br />- 탈퇴 후에도 기여한 문서와 댓글은 삭제되지 않습니다.
            <br />- 탈퇴한 계정의 닉네임은 본인과 타인 모두 더는 사용할 수 없습니다.
            <br /> - 회원 탈퇴 후 15일간 재가입이 불가능합니다.
          </Row>

          <Row align="right">
            <Checkbox checked={confirmCheck} onChange={setConfirmCheck}>
              탈퇴 안내사항을 이해하였으며, 동의합니다.
            </Checkbox>

            <WithdrawlButton color={Color.DANGER} size={Size.MIDDLE}>
              탈퇴하기
            </WithdrawlButton>
          </Row>
        </Accordion>
      </Content>
    </Box>
  );
};

export default UserWithdrawl;
