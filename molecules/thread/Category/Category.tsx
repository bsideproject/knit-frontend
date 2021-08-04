import { FC, memo, ReactNode } from 'react';
import { CategoryType } from '~/@types/resources/thread';
import { Container, IconWrapper, IconBorder, Label, IconContainer } from './Category.styled';

interface Props {
  type: CategoryType;
  isEditMode?: boolean;
  selected?: boolean;
  onClick?: (type: CategoryType) => void;
}

export const label: Record<CategoryType, string> = {
  [CategoryType.PLANNING]: '기획',
  [CategoryType.DESIGN]: '디자인',
  [CategoryType.MARKETING]: '마케팅',
  [CategoryType.DEVELOP]: '개발',
  [CategoryType.DATA]: '데이터분석',
  [CategoryType.ETC]: '기타',
};

const icon: Record<CategoryType, ReactNode> = {
  [CategoryType.PLANNING]: '✍️',
  [CategoryType.DESIGN]: '‍🎨️',
  [CategoryType.MARKETING]: '🖋',
  [CategoryType.DEVELOP]: '💻',
  [CategoryType.DATA]: '‍📊️',
  [CategoryType.ETC]: '🎸',
};

const Category: FC<Props> = ({ type, isEditMode, selected, onClick }) => {
  const handleClick = () => {
    if (isEditMode) {
      onClick?.(type);
    }
  };
  return (
    <Container>
      <IconContainer isEditMode={isEditMode} selected={selected} onClick={handleClick}>
        <IconBorder />
        <IconWrapper>{icon[type]}</IconWrapper>
      </IconContainer>
      <Label>{label[type]}</Label>
    </Container>
  );
};

export default memo<FC<Props>>(Category);
