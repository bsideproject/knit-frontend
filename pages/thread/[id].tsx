import { useRouter } from 'next/router';
import { FC } from 'react';
import { ThreadAction } from '~/@types/resources/thread';

import { Thread as ThreadComponent } from '~/organisms/thread';

const ThreadPage: FC = () => {
  const router = useRouter();

  const { id, action } = router.query as { id: string; action: ThreadAction };
  const isEditMode = action === ThreadAction.EDIT;

  return <ThreadComponent id={id} isEditMode={isEditMode} />;
};

export default ThreadPage;
