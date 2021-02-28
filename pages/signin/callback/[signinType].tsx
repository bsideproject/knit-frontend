import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { SigninType } from '~/@types/auth';

const SigninCallback: FC = () => {
  const router = useRouter();
  const { signinType, code } = router.query;

  useEffect(() => {
    // router.query가 초기화가 안된 경우 skip
    if (!signinType) return;

    // code값이 전달되지 않은 경우 signin 페이지로 redirect
    if (!code) router.push('/signin');

    /**
     * Todo
     * - signinType, code값으로 로그인 API 호출
     * - response로 내려받은 access token, refresh token 쿠키로 저장
     * - 필요한 API가 있다면 호출 (유저정보 조회 등)
     * - 서비스 페이지로 redirect
     */
  }, [signinType, code]);

  return <></>;
};

export default SigninCallback;
