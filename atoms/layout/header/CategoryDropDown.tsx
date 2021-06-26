import { useRouter } from 'next/router';
import { FC, RefObject } from 'react';
import { Container, Category } from './CategoryDropDown.styled';

const categories = ['기획', '디자인', '개발', '마케팅', '데이터분석', '기타'];

interface Props {
  elemRef: RefObject<HTMLDivElement>;
  setCategoryDropDownOpened: (opened: boolean) => void;
}
const CategoryDropDown: FC<Props> = ({ elemRef, setCategoryDropDownOpened }) => {
  const router = useRouter();
  const handleCategoryClicked = (category: string) => {
    const newCategory = `#${category}`;
    setCategoryDropDownOpened(false);
    router.push(`/search/${encodeURIComponent(newCategory)}`);
  };
  return (
    <Container ref={elemRef}>
      {categories.map((category) => (
        <Category
          key={category}
          onClick={() => {
            handleCategoryClicked(category);
          }}
        >
          {category}
        </Category>
      ))}
    </Container>
  );
};

export default CategoryDropDown;
