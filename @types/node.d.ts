declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_OAUTH_GOOGLE_CLIENT_ID: string;
      NEXT_PUBLIC_OAUTH_GOOGLE_SDK_URL: string;
      NEXT_PUBLIC_OAUTH_NAVER_CLIENT_ID: string;
      NEXT_PUBLIC_OAUTH_NAVER_SDK_URL: string;
    }
  }
}

// Just to make this file into a module
export {};
