import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const TopMenuContainer = styled.div<{ scroll: number }>`
  display: none;
  background: #ffffff;
  color: #505055;
  ${font.set(16)}
  line-height: 24px;
  @media (max-width: 768px) {
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    border-bottom: 1px solid #e2e1eb;
    position: ${({ scroll }) => (scroll > 80 ? 'sticky' : 'unset')};
    top: 56px;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;
interface CatergoryProps {
  selected: boolean;
}

export const MenuButton = styled.div<CatergoryProps>`
  ${font.set(16)}

  @media (max-width: 768px) {
    white-space: nowrap;
    padding: 0 0 11px 0;
    margin: 11px 0 0 24px;
    border-bottom: ${({ selected }) => (selected ? '3px solid #5c16cb' : 'none')};
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  }
`;
