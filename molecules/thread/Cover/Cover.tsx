import { FC } from 'react';
import { promptFileSelector } from '~/utils/file';
import { Container, Image, ImageChangeButton, ImageWrapper, TaskButton } from './Cover.styled';
import { CoverProps } from './types';

const Cover: FC<CoverProps> = ({ url, editable, onChange }) => {
  const handleClickImage = async () => {
    if (!editable) return;

    // 썸네일 변경
    const file = await promptFileSelector();
    /**
     * TODO
     * - S3 파일 업로드
     * - 내려온 URL을 onChange로 부모 컴포넌트에 전달
     */
    console.log(file);
  };

  const handleClickTaskButton = async () => {
    // 썸네일 삭제
    if (url) {
      onChange(null);
      return;
    }

    // 썸네일 추가
    const file = await promptFileSelector();
    console.log(file);
    /**
     * TODO
     * - S3 파일 업로드
     * - 내려온 URL을 onChange로 부모 컴포넌트에 전달
     */
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

export default Cover;
