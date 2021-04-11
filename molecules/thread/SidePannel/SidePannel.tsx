import { FC } from 'react';
import {
  ImageIcon,
  VideoIcon,
  SmileIcon,
  LineIcon,
  CodeIcon,
  LinkIcon,
  QuoteIcon,
} from '~/public/assets/icon';
import { Container, IconContainer } from './SidePannel.styled';

const SidePannel: FC = () => {
  return (
    <Container>
      <IconContainer>
        <ImageIcon />
      </IconContainer>
      <IconContainer>
        <VideoIcon />
      </IconContainer>
      <IconContainer>
        <SmileIcon />
      </IconContainer>
      <IconContainer>
        <LineIcon />
      </IconContainer>
      <IconContainer>
        <CodeIcon />
      </IconContainer>
      <IconContainer>
        <LinkIcon />
      </IconContainer>
      <IconContainer>
        <QuoteIcon />
      </IconContainer>
    </Container>
  );
};

export default SidePannel;
