import { FC } from 'react';
import { DateTime } from 'luxon';
import { Thread } from '~/@types/resources/thread';
import { Container } from './ModifiedDateTime.styled';

interface Props {
  dateTime: Thread['modifiedDateTime'];
}

const ModifiedDateTime: FC<Props> = ({ dateTime }) => {
  if (!dateTime) {
    return null;
  }
  const formattedDateTime = DateTime.fromMillis(dateTime).toFormat('yyyy.LL.dd HH:mm');
  return <Container>{formattedDateTime} 작성된 문서</Container>;
};

export default ModifiedDateTime;
