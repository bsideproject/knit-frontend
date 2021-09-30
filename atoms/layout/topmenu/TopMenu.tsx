import { FC, useState } from 'react';
import { TopMenuContainer, MenuButton } from './TopMenu.styled';

interface Props {
  scroll: number;
  setMenuCategory?: any;
}
const categorys = ['홈', '모아보기', '기획', '디자인', '마케팅', '개발', '데이터분석'];

const TopMenu: FC<Props> = (props) => {
  const { scroll } = props;

  const [currentCategory, setCurrentCategory] = useState('홈');
  const onChangeCategory = (category: string) => {
    setCurrentCategory(category);
    props.setMenuCategory(category);
  };

  return (
    <TopMenuContainer scroll={scroll}>
      {categorys.map((category) => (
        <>
          <MenuButton
            key={category}
            selected={category === currentCategory}
            onClick={() => {
              onChangeCategory(category);
            }}
          >
            {category}
          </MenuButton>
        </>
      ))}
    </TopMenuContainer>
  );
};

export default TopMenu;
