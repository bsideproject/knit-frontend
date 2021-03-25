import { FC } from 'react';
import { Hashtag } from '~/atoms/hashtag';
import { Container, Aligner, BoundaryLine } from './Hashtags.styled';

const Hashtags: FC = () => {
  return (
    <Container>
      <Aligner>
        <Hashtag url="/" title="#비사이드" />
        <Hashtag url="/" title="#일이삼사오육칠팔" />
        <Hashtag url="/" title="#안드로이드가이드" />
        <Hashtag
          url="/"
          title="#해시태그해시태그해시태그해시태그해시태그해시태그해시태그해시태그해시태그해시태그해시태그"
        />
        <BoundaryLine />
      </Aligner>
    </Container>
  );
};

export default Hashtags;
