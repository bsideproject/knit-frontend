import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { resolveProp } from '~/utils/styles';
import DeviderPicker from '../SidePannel/DeviderPicker';

export const Container = styled.div<{ editable: boolean }>`
  position: relative;

  padding: 15px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  outline: none;

  caret-color: transparent;

  ${resolveProp('editable', {
    false: css`
      cursor: default;
    `,
    true: css`
      cursor: pointer;
      color: #2f2f2f;

      &:hover,
      &:focus {
        background: #f3f2f5;
      }
      &:focus {
        box-shadow: 0px 0px 1px 1px #865acc80;
      }
    `,
  })}

  & > ${DeviderPicker} {
    right: calc(50% - 60px);
    top: 40px;
  }
`;

const Line = styled.hr`
  margin: 0;
`;

export const NormalLine = styled(Line)`
  width: 100%;
  border-bottom: 0px;
`;

export const DashedLine = styled(Line)`
  width: 100%;
  border-style: dashed;
`;

export const SolidLine = styled(Line)`
  width: 100%;
  border-style: solid;
`;

export const DoubleLine = styled(Line)`
  width: 100%;
  height: 2px;
  border-left: 0px;
  border-right: 0px;
  border-style: double;
`;

export const ShortLine = styled(Line)`
  width: 30%;
  border-style: solid;
`;
