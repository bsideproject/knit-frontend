import { ChangeEventHandler } from 'react';

/**
 * 파일 선택기를 오픈한다.
 * @return {Promise<File>} 선택한 파일 객체
 */
export const promptFileSelector = async () => {
  const input = document.createElement('input');
  input.type = 'file';

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
export const getBase64 = (file: Blob) => {
  return new Promise<string | Blob>((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result && !(reader?.result instanceof ArrayBuffer)) {
        resolve(reader.result);
      }
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
      reject(error);
    };
  });
};
