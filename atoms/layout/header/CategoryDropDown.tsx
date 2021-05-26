import { FC, RefObject } from 'react';
import { Container, Category } from './CategoryDropDown.styled';

const categories = ['기획', '디자인', '개발', '마케팅', '데이터분석', '기타'];

interface Props {
  elemRef: RefObject<HTMLDivElement>;
}
const CategoryDropDown: FC<Props> = ({ elemRef }) => {
  return (
    <Container ref={elemRef}>
      {categories.map((category) => (
        <Category key={category}>{category}</Category>
      ))}
    </Container>
  );
};

export default CategoryDropDown;
