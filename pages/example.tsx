import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonType, PrimaryButton } from '~/atoms/button';
import { closeDialog, openDialog } from '~/atoms/dialog';
import api from '~/utils/api';

export default function ExamplePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/get/some/resource').catch(() => {});
  }, []);

  const handleClickButton = () => {
    dispatch(closeDialog());
  };

  const handleClickPrimaryButton = () => {
    dispatch(openDialog({ title: 'title', message: 'message' }));
  };

  return (
    <div title="example">
      {/* default Button */}
      <Button onClick={handleClickButton}>취소</Button>
      {/* Button with 'type' prop */}
      <Button type={ButtonType.DANGER}>삭제</Button>
      {/* wrapped Button */}
      <PrimaryButton onClick={handleClickPrimaryButton}>확인</PrimaryButton>
    </div>
  );
}
