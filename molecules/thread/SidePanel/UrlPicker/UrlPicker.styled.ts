import styled from '@emotion/styled';
import { TrashCanIcon } from '~/public/assets/icon';
import { Button } from '~/atoms/button';
import { TextInput as AtomTextInput } from '~/atoms/field';
import * as font from '~/styles/font';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 50px;
  width: 385px;
  height: 140px;

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  padding-bottom: 10px;
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

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #e2e1eb;
  box-sizing: border-box;
  padding: 10px;
`;

export const TrashIcon = styled(TrashCanIcon)``;

export const AddButton = styled(Button)`
  /* width: 100px; */
  text-align: center;
  padding-top: 10px;
`;

export const TextInput = styled(AtomTextInput)`
  ${font.set(12)}
`;
