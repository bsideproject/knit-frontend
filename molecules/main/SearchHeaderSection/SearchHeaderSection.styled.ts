import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const SerachHeader = styled.div<{ scroll: number }>`
  display: none;
  ${font.set(12)}
  padding: 14px 22px 14px 16px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    display: ${({ scroll }) => (scroll > 0 ? 'flex' : 'none')};
  }
`;

/* left */
export const LeftSection = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
`;

export const KnitHomeButton = styled.span`
  width: 32px;
  height: 28px;
  margin-right: 12px;
  background: url('/assets/knit_logo_s.svg') no-repeat left center;
`;

export const SearchInput = styled.input`
  width: 85%;
  border: none;
  font-size: 18px;

  &::placeholder {
    font-size: 18px;
    line-height: 24px;
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

/* right */
export const RightMenuSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    background: url('/assets/hamburger_menu.png') no-repeat left center;
  }
`;

export const ClearButton = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    cursor: pointer;
    background: url('/assets/clear_button.png') no-repeat right center;
  }
`;
