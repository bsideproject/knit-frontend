import { FC, memo, ReactNode } from 'react';
import Link from 'next/link';
import { Anchor } from './LinkTask.styled';

interface Props {
  href: string;
  children: ReactNode;
}

const Task: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <Anchor href={href}>{children}</Anchor>
    </Link>
  );
};

export default memo<FC<Props>>(Task);
