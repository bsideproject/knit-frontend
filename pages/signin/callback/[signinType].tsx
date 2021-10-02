import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGoogleSigninSDK, initNaverSigninSDK } from '~/utils/auth';
import { SigninType } from '~/@types/auth';
import axios from '~/utils/api';

const SigninCallback: FC = () => {
  const router = useRouter();
  const { signinType } = router.query;

  useEffect(() => {
    // router.query가 초기화가 안된 경우 pass
    if (!signinType) return;

    if (signinType === SigninType.NAVER) {
      handleNaverLogin().then(() => {
        // 네이버 로그인 성공. 메인 페이지로 redirect
        router.push('/');
      });
      return;
    }

    if (signinType === SigninType.GOOGLE) {
      handleGoogleLogin().then(() => {
        router.push('/');
      });
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

const handleGoogleLogin = async () => {
  const googleLogin = await initGoogleSigninSDK({ callbackHandle: true });

  return new Promise<void>(async (resolve, reject) => {
    const googleUser = googleLogin.currentUser.get();

    const googleAccessToken = googleUser.getAuthResponse().id_token;
    const userEmail = googleUser.getBasicProfile().getEmail();

    try {
      const { data } = await axios.post(`v1/user/login/google`, undefined, {
        headers: {
          token: googleUser.Zb.access_token, // TODO : Refactor accessToken
        },
      });

      localStorage.setItem('access_token', data.accessToken);
      localStorage.setItem('refresh_token', data.refreshToken);

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

const handleNaverLogin = async () => {
  const naverLogin = await initNaverSigninSDK({ callbackHandle: true });

  return new Promise<void>((resolve, reject) => {
    naverLogin.getLoginStatus(async (status: unknown) => {
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

      try {
        const { data } = await axios.post(`v1/user/login/naver`, undefined, {
          headers: {
            token: naverLogin.accessToken.accessToken, // TODO : Refactor accessToken
          },
        });

        localStorage.setItem('access_token', data.accessToken);
        localStorage.setItem('refresh_token', data.refreshToken);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};
