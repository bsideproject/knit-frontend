import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { initNaverSigninSDK } from '~/utils/auth';
import { SigninType } from '~/@types/auth';

const SigninCallback: FC = () => {
  const router = useRouter();
  const { signinType } = router.query;

  useEffect(() => {
    // router.query가 초기화가 안된 경우 skip
    if (!signinType) return;

    if (signinType === SigninType.NAVER) {
      handleNaverLogin().then(() => {
        // 네이버 로그인 성공. 메인 페이지로 redirect
        router.push('/');
      });
      return;
    }

    if (signinType === SigninType.GOOGLE) {
      /**
       * Todo
       * - Google login callback
       */
      return;
    }

    alert('잘못된 접근입니다.');
    router.push('/signin');
  }, [signinType]);

  return <></>;
};

export default SigninCallback;

const handleNaverLogin = async () => {
  const naverLogin = await initNaverSigninSDK({ callbackHandle: true });

  return new Promise<void>((resolve, reject) => {
    naverLogin.getLoginStatus((status: unknown) => {
      if (!status) {
        reject(new Error('naver login callback fail'));
        return;
      }

      /* 필수 수집 정보 체크 */
      const email = naverLogin.user.getEmail();
      if (email === undefined || email === null) {
        alert('이메일은 필수정보입니다. 정보제공을 동의해주세요.');
        /* 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
        naverLogin.reprompt();
        return;
      }

      /**
       * Todo
       * - Knit BE 로그인 API 호출
       * - Knit Access token, Refresh token 저장
       */
      resolve();
    });
  });
};
