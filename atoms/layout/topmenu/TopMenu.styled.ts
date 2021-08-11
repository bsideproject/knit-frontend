import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const TopMenuContainer = styled.div`
  display: none;
  color: #505055;
  ${font.set(16)}
  line-height: 24px;
  @media (max-width: 768px) {
    display: flex;
    border-bottom: 1px solid #e2e1eb;
  }

  & .selected {
    ${font.set(16, 'bold')}
    border-bottom: 3px solid #5c16cb;
  }
`;

export const MenuButton = styled.div`
  @media (max-width: 768px) {
    padding: 0 0 11px 0;
    margin: 11px 0 0 24px;
  }
`;
