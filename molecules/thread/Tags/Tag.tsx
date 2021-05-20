import { FC, memo } from 'react';
import { Container, DeleteButton } from './Tag.styled';
import { Tag as TagAtom } from '~/atoms/tag';

interface Props {
  id: number;
  title: string;
  editting: boolean;
  onClickDelete: (id: number) => void;
}

const Tag: FC<Props> = ({ id, title, editting, onClickDelete }) => {
  const handleClickDelete = () => {
    if (editting) onClickDelete(id);
  };

  return (
    <Container editting={editting}>
      <DeleteButton sizePx={20} iconSizePx={10} onClick={handleClickDelete} tabIndex={-1} />
      <TagAtom title={title} tabIndex={-1} />
    </Container>
  );
};

export default memo<FC<Props>>(Tag);
