import styled from '@emotion/styled';
import Link from 'next/link';
import { VFC } from 'react';
import { IHashtag } from '~/@types';
import { Anchor, AnchorProps } from './Hashtag.styled';

interface HashtagProps extends IHashtag, Partial<AnchorProps> {
  className?: string;
}

const Hashtag: VFC<HashtagProps> = ({ url, title, colorMode = 'light', className }) => {
  return (
    <Link href={url}>
      <Anchor href={url} colorMode={colorMode} className={className}>
        {title}
      </Anchor>
    </Link>
  );
};
export default styled(Hashtag)``;
