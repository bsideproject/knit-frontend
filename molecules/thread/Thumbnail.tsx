import { FC } from 'react';
import { Thread } from '~/@types/resources/thread';
import { Container, Image } from './Thumbnail.styled';

interface Props {
  url: Thread['thumbnailUrl'];
}

const Thumbnail: FC<Props> = ({ url }) => {
  return (
    <Container>
      <Image src={url} alt="thumbnail" />
    </Container>
  );
};

export default Thumbnail;
