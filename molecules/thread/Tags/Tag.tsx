import { FC } from 'react';
import { Container, DeleteButton } from './Tag.styled';
import { Tag as TagAtom } from '~/atoms/tag';

interface Props {
  id: number;
  title: string;
  editting: boolean;
  onClickDelete: (id: number) => void;
}

const Tag: FC<Props> = ({ id, title, editting, onClickDelete }) => {
  return (
    <Container editting={editting}>
      <TagAtom title={title} />
      <DeleteButton sizePx={25} iconSizePx={10} onClick={() => onClickDelete(id)} />
    </Container>
  );
};

export default Tag;
