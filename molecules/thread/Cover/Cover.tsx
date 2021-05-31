import { FC, memo, MouseEvent } from 'react';
import { promptFileSelector } from '~/utils/file';
import { Container, Image, ImageChangeButton, ImageWrapper, TaskButton } from './Cover.styled';
import { CoverProps, ImageUploadResponse } from './types';
import axios from '~/utils/api';
import { FileExtensionType } from '~/utils/file/types';

const Cover: FC<CoverProps> = ({ url, editable, onChange }) => {
  const appendImage = async () => {
    const file = await promptFileSelector(FileExtensionType.IMAGE);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', 'thumbnailUrl');
    try {
      const { url } = (await axios.post(`upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })) as ImageUploadResponse;
      console.log(url);
      onChange(url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickImage = async () => {
    if (!editable) return;

    appendImage();
  };

  const handleClickTaskButton = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 썸네일 삭제
    if (url) {
      onChange(null);
      return;
    }

    // 썸네일 추가
    appendImage();
  };

  return (
    <Container>
      <ImageWrapper editable={editable} onClick={handleClickImage}>
        {url && <Image src={url} alt="thumbnail" />}
        <ImageChangeButton>Change Cover</ImageChangeButton>
      </ImageWrapper>
      {editable && (
        <TaskButton onClick={handleClickTaskButton} hasCover={!!url}>
          {url ? '- remove cover' : '+ add cover'}
        </TaskButton>
      )}
    </Container>
  );
};

export default memo<FC<CoverProps>>(Cover);
