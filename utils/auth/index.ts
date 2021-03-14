import { SigninType } from '~/@types/auth';

const SDK_URL: Record<SigninType, string> = {
  [SigninType.NAVER]: process.env.NEXT_PUBLIC_OAUTH_NAVER_SDK_URL ?? '',
  [SigninType.GOOGLE]: process.env.NEXT_PUBLIC_OAUTH_GOOGLE_SDK_URL ?? '',
};

const OAUTH_CALLBACK_URL: Record<SigninType, string> = {
  [SigninType.NAVER]: `${process.env.NEXT_PUBLIC_BASE_URL}/signin/callback/${SigninType.NAVER}`,
  [SigninType.GOOGLE]: `${process.env.NEXT_PUBLIC_BASE_URL}/signin/callback/${SigninType.GOOGLE}`,
};

const injectSigninSDK = (type: SigninType) => {
  const id = `${type}_SDK`;
  if (document.getElementById(id)) return Promise.resolve();

  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.src = SDK_URL[type];
  scriptElement.id = id;
  document.head.appendChild(scriptElement);

  return new Promise((resolve) => {
    scriptElement.onload = resolve;
  });
};

export const initNaverSigninSDK = async ({
  callbackHandle = false,
}: { callbackHandle?: boolean } = {}) => {
  await injectSigninSDK(SigninType.NAVER);

  const naverLogin = new (window as any).naver.LoginWithNaverId({
    clientId: process.env.NEXT_PUBLIC_OAUTH_NAVER_CLIENT_ID,
    callbackUrl: OAUTH_CALLBACK_URL[SigninType.NAVER],
    isPopup: false,
    ...(callbackHandle ? { callbackHandle: true } : { loginButton: {} }),
  });
  naverLogin.init();
  return naverLogin;
};

export const initGoogleSigninSDK = async ({
  callbackHandle = false,
}: { callbackHandle?: boolean } = {}) => {
  await injectSigninSDK(SigninType.GOOGLE);
  const { gapi } = window as any;

  return new Promise<any>((resolve) => {
    gapi.load('auth2', async () => {
      const auth = gapi.auth2.init({
        client_id: process.env.NEXT_PUBLIC_OAUTH_GOOGLE_CLIENT_ID,
        // redirect_uri: OAUTH_CALLBACK_URL[SigninType.GOOGLE],
        // ux_mode: 'redirect',
        // fetch_basic_profile: true,
      });

      if (!callbackHandle) {
        await gapi.signin2.render('googleIdLogin', {
          scope: 'email',
          width: 230,
          height: 50,
          longtitle: true,
          // theme: 'dark',
        });
      }

      resolve(auth);
    });
  });
};
