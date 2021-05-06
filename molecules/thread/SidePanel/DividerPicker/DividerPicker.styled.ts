import styled from '@emotion/styled';
import { TrashCanIcon } from '~/public/assets/icon';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 50px;

  width: 120px;

  background: white;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;

  &:hover {
    background: #fafafa;

    & > hr {
      transition: 0.1s;
      border-color: #5c16cb;
    }
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #f3f2f5;
  }
`;

export const Line = styled.hr`
  margin: 0;
`;

export const NormalLine = styled(Line)`
  width: 60%;
  border-bottom: 0px;
`;

export const DashedLine = styled(Line)`
  width: 60%;
  border-style: dashed;
`;

export const SolidLine = styled(Line)`
  width: 60%;
  border-style: solid;
`;

export const DoubleLine = styled(Line)`
  width: 60%;
  height: 2px;
  border-left: 0px;
  border-right: 0px;
  border-style: double;
`;

export const ShortLine = styled(Line)`
  width: 30%;
  border-style: solid;
`;

export const TrashIcon = styled(TrashCanIcon)``;
