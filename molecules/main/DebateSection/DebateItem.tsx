import { IDebate } from '~/@types/db';
import { Box, BoxTitle, BoxContent, BoxComment } from './DebateItem.styled';

interface DebateItemProps extends Omit<IDebate, 'id'> {}

const DebateItem = ({ title, content, commentCount }: DebateItemProps) => {
  return (
    <Box>
      <BoxTitle>{title}</BoxTitle>
      <BoxContent> {content}</BoxContent>
      <BoxComment>코멘트 {commentCount}</BoxComment>
    </Box>
  );
};

export default DebateItem;
