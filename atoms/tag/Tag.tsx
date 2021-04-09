import styled from '@emotion/styled';
import Link from 'next/link';
import { VFC } from 'react';
import { ITag } from '~/@types';
import { Anchor } from './Tag.styled';

interface TagProps extends ITag {
  className?: string;
  onClick?: () => void;
}

const Tag: VFC<TagProps> = ({ url, title, className, onClick }) => {
  if (url) {
    return (
      <Link href={url}>
        <Anchor href={url} className={className}>
          {title}
        </Anchor>
      </Link>
    );
  }
  return (
    <Anchor href="#" className={className} onClick={onClick}>
      {title}
    </Anchor>
  );
};
export default styled(Tag)``;
