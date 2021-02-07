import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styles from './Layout.module.css';

type LayoutProps = PropsWithChildren<{
  title: string;
}>;

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
