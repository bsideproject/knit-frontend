import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const TopMenuContainer = styled.div`
  display: none;
  color: #505055;
  ${font.set(16)}
  line-height: 24px;
  @media only screen and (max-width: 768px) {
    display: flex;
    border-bottom: 1px solid #e2e1eb;
  }

  & .selected {
    // padding-left: 24px !important; //TODO: first-child
    ${font.set(16, 'bold')}
    border-bottom: 3px solid #5c16cb;
    // padding: 11px 12px 12px;
  }
`;

export const MenuButton = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 0 0 11px 0;
    margin: 11px 0 0 24px;
  }
`;
