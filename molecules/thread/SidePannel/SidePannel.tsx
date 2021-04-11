import { FC, useEffect, useRef } from 'react';
import _ from 'lodash';
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      if (!ref.current || !ref.current.parentElement || !document.scrollingElement) return;
      const diff = 30 - ref.current.parentElement.offsetTop + document.scrollingElement.scrollTop;
      ref.current.style.transform = `translate(0, ${Math.max(diff, 0)}px)`;
    }, 15);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container ref={ref}>
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
