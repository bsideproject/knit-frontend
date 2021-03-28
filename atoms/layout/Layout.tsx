import { FC, useEffect } from 'react';
import Head from 'next/head';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { Contents } from './Layout.styled';
import Header from './header';
import Footer from './footer';
import { useRootState } from '~/app/store';

/**
 * GOOGLE-TAGMANAGER-INIT
 */
let tagManagerArgs: TagManagerArgs;

if (process.env.NODE_ENV === 'production') {
  tagManagerArgs = {
    gtmId: 'GTM-5DTJSC8',
  };
} else {
  // temp
  tagManagerArgs = {
    gtmId: 'GTM-5DTJSC8',
  };
}
interface LayoutProps {
  title?: string;
}
const Layout: FC<LayoutProps> = ({ title = 'Knit', children }) => {
  const headerHeightPx = useRootState(({ header }) => header.heightPx);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Header />
      <Contents paddingTopPx={headerHeightPx}>{children}</Contents>
      <Footer />
    </>
  );
};
export default Layout;
