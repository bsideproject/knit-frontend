import { ChangeEventHandler } from 'react';
import { FileExtensionType } from './types';
/**
 * 파일 선택기를 오픈한다.
 * @accept { gif , png , jpeg , png}
 * @return {Promise<File>} 선택한 파일 객체
 */
export const promptFileSelector = async (type?: FileExtensionType) => {
  const input = document.createElement('input');
  input.type = 'file';
  if (type === FileExtensionType.IMAGE) {
    input.accept = '.jpg,.png,.gif';
  }

  return new Promise<File>((resolve, reject) => {
    const handler: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
      if (!currentTarget.files) reject();
      if (currentTarget.files) {
        resolve(currentTarget.files[0]);
      }
    };
    input.addEventListener('change', handler as any);
    input.click();
  });
};
