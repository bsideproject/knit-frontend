import type { AppProps } from 'next/app';
import { useEffect, VFC } from 'react';
import * as dotenv from 'dotenv';
import { wrapper } from './store';
import { Layout, Header, Footer } from '~/atoms/layout';
import axios from '~/utils/api';

dotenv.config();

const App: VFC<AppProps> = ({ Component, pageProps, router }) => {
  const { pathname } = router;

  useEffect(() => {
    testApi();
  }, []);

  const testApi = () => {
    const response = axios.get(`/`);

    response.then((data) => {
      console.log(process.env.TEST_ENV);
      console.log(process.env.TEST2);
      console.log('url>>>>', process.env.NEXT_PUBLIC_API_URL);
      console.log('data>>>>', data);
    });
  };

  if (pathname.startsWith('/signin')) {
    return <Component />;
  }

  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
};

export default wrapper.withRedux(App);
