import { FC } from 'react';
import { Container } from './EmptyTag.styled';
import { Tag as TagAtom } from '~/atoms/tag';

const EmptyTag: FC = () => {
  return (
    <Container>
      <TagAtom title="새 주제 태그를 입력하세요" tabIndex={-1} />
    </Container>
  );
};

export default EmptyTag;
