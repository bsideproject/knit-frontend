import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

export interface LinkProps extends NextLinkProps {
  className?: string;
  children?: ReactNode;
}

export default function Link({ className, children, ...restProps }: LinkProps) {
  return (
    <NextLink {...restProps}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
