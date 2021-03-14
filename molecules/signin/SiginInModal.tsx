import { FC, useState } from 'react';
import { Modal } from '~/atoms/modal';
import GoogleSigninButton from './GoogleSigninButton';
import NaverSigninButton from './NaverSigninButton';
import {
  Container,
  CloseButton,
  Title,
  SubTitle,
  SigninButtonContainer,
  Checkbox,
  Policy,
} from './SigninModal.styled';

interface Props {
  onClickClose: (...args: any) => any;
}

const SigninModal: FC<Props> = ({ onClickClose }) => {
  const [keepSigninState, setKeepSigninState] = useState(false);

  return (
    <Modal top>
      <Container>
        <CloseButton onClick={onClickClose} />
        <Title>Knit</Title>
        <SubTitle>서비스 가치를 전달하는 문구를 여기에</SubTitle>
        <SigninButtonContainer>
          <NaverSigninButton />
          <GoogleSigninButton />
        </SigninButtonContainer>
        <Checkbox checked={keepSigninState} onChange={setKeepSigninState}>
          로그인 상태 유지
        </Checkbox>
        <Policy>
          시작하기 진행 시, KNIT의 이용약관 및 개인정보 취급방침에 동의하는 것으로 간주합니다.
        </Policy>
      </Container>
    </Modal>
  );
};

export default SigninModal;
