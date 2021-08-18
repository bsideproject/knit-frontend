import axios, { AxiosResponse } from 'axios';

let token: string | null = '';
if (typeof window !== 'undefined') {
  token = localStorage.getItem('access_token');
}
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
    Authorization: `Bearer ${token}`,
  },
});

const defaultResponseHandler = (res: AxiosResponse) => {
  return res.data;
};
// const defaultErrorHandler = (err: AxiosError) => {
//   return Promise.reject(err);
// };
instance.interceptors.response.use(defaultResponseHandler);

export const fetcher = (url: string) => instance.get(url).then((res) => res.data);

export default instance;
