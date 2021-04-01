import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  position: relative;
  margin-right: 20px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 20%);

  font-size: 20px;

  cursor: default;
  user-select: none;
`;

export const Label = styled.span`
  position: relative;
  top: 6px;

  ${font.set(14)}
  color: #888;
`;
