import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const InnerTabContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

interface TabProps {
  selected: boolean;
}

export const TabButton = styled.div<TabProps>`
  ${font.set(16)}

  @media (max-width: 768px) {
    white-space: nowrap;
    line-height: 20px;
    padding: 0 19px;
    color: ${({ selected }) => (selected ? '#5c16cb' : '#818189')};
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  }
`;

export const Divider = styled.div`
  border: 1px solid #e2e1eb;
`;
