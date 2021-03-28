import { FC } from 'react';
import { Thread, ThreadAction } from '~/@types/resources/thread';
import { Container, Image } from './Thumbnail.styled';

interface Props {
  url: Thread['thumbnailUrl'];
  action: ThreadAction | undefined;
  onClick: () => void;
}

const Thumbnail: FC<Props> = ({ url, action, onClick }) => {
  return (
    <Container action={action} onClick={onClick}>
      <Image src={url} alt="thumbnail" />
    </Container>
  );
};

export default Thumbnail;
