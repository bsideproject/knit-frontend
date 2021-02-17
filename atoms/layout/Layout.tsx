import Head from 'next/head';
import { ReactNode } from 'react';

import styles from './Layout.module.scss';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export default function Layout({ title = 'Knit', children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      <div id="main">{children}</div>
    </div>
  );
}
