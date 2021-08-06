import { FC } from 'react';
import { TopMenuContainer, MenuButton } from './TopMenu.styled';

const TopMenu: FC = () => {
  return (
    <TopMenuContainer>
      <MenuButton className="selected">홈</MenuButton>
      <MenuButton>모아보기</MenuButton>
      <MenuButton>기획</MenuButton>
      <MenuButton>디자인</MenuButton>
      <MenuButton>개발</MenuButton>
    </TopMenuContainer>
  );
};

export default TopMenu;
