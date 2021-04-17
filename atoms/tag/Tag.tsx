import styled from '@emotion/styled';
import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, memo, VFC } from 'react';
import { ITag } from '~/@types';
import { Anchor } from './Tag.styled';

type AnchorProps = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'title'
>;

interface TagProps extends ITag, AnchorProps {
  className?: string;
  onClick?: () => void;
}

const Tag: VFC<TagProps> = ({ url, title, className, onClick, ...restProps }) => {
  if (url) {
    return (
      <Link href={url}>
        <Anchor href={url} className={className} {...restProps}>
          {title}
        </Anchor>
      </Link>
    );
  }
  return (
    <Anchor href="#" className={className} onClick={onClick} {...restProps}>
      {title}
    </Anchor>
  );
};
export default styled(memo(Tag))``;
