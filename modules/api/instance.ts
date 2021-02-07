import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
  },
});

// const defaultResponseHandler = (res: AxiosResponse) => {
//   return res;
// };
// const defaultErrorHandler = (err: AxiosError) => {
//   return Promise.reject(err);
// };
// instance.interceptors.response.use(defaultResponseHandler, defaultErrorHandler);

export default instance;
