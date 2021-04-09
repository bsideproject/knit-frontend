import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as font from '~/styles/font';
import { resolveProp } from '~/utils/styles';

export const Container = styled.div`
  position: relative;
  margin-right: 24px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    margin-left: 10px;
  }
`;

export const IconBorder = styled.div`
  position: absolute;
  top: -25%;
  left: -25%;

  width: 150%;
  height: 150%;

  background: linear-gradient(90deg, #e91e63, #865acc);

  z-index: -1;
  transition: 0.22s ease-in-out;
  transform: translate(75%, 75%) rotate(45deg);
`;

export const IconContainer = styled.div<{ isEditMode?: boolean; selected?: boolean }>`
  position: relative;
  padding: 2px;

  border-radius: 4px;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 15%);

  overflow: hidden;

  ${resolveProp('selected', {
    true: css`
      ${IconBorder} {
        transform: translate(0, 0) rotate(45deg);
      }
    `,
  })}

  ${resolveProp('isEditMode', {
    true: css`
      cursor: pointer;

      &:hover {
        transition: 0.12s ease-out;
        box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 25%);
      }
    `,
  })}
`;

export const IconWrapper = styled.div`
  width: 26px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
  border-radius: 3px;

  font-size: 20px;

  /* cursor: default; */
  user-select: none;
`;

export const Label = styled.span`
  position: absolute;
  width: max-content;
  top: 38px;

  ${font.set(12)}
  color: #888;
`;
