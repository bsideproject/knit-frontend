import { FC } from 'react';
import { DateTime } from 'luxon';
import { Thread } from '~/@types/resources/thread';
import { Container } from './CreatedDateTime.styled';

interface Props {
  dateTime: Thread['createdDateTime'];
}

const CreatedDateTime: FC<Props> = ({ dateTime }) => {
  const formattedDateTime = DateTime.fromMillis(dateTime).toFormat('yyyy.LL.dd HH:mm');
  return <Container>{formattedDateTime} 작성된 문서</Container>;
};

export default CreatedDateTime;
