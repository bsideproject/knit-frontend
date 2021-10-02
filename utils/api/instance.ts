import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const defaultResponseHandler = (res: AxiosResponse) => {
  return res.data;
};

const defaultRequestHandler = (config: AxiosRequestConfig) => {
  let token: string | null = '';
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token') ?? '';
  }
  config.headers = {
    ...config.headers,
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
    Authorization: `Bearer ${token}`,
  };
  return config;
};
// const defaultErrorHandler = (err: AxiosError) => {
//   return Promise.reject(err);
// };

instance.interceptors.request.use(defaultRequestHandler);
instance.interceptors.response.use(defaultResponseHandler);

export const fetcher = (url: string) => instance.get(url).then((res) => res.data);

export default instance;
