import { FC } from 'react';
import { Container } from './EmptyTag.styled';
import { Tag as TagAtom } from '~/atoms/tag';
import { Thread } from '~/@types/resources/thread';

interface Props {
  tags: Thread['tags'];
  editting: boolean;
}

const EmptyTag: FC<Props> = ({ tags, editting }) => {
  return (
    <Container tags={tags} editting={editting}>
      <TagAtom title="새 주제 태그를 입력하세요" tabIndex={-1} />
    </Container>
  );
};

export default EmptyTag;
