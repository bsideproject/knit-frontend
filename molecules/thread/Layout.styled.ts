import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { fitInResolution } from '~/styles/layout';
import * as font from '~/styles/font';
import { ThreadAction } from '~/@types/resources/thread';

export const Container = styled.div`
  ${fitInResolution};
  position: relative;
`;

export const Header = styled.div`
  position: relative;

  height: 50px;

  display: flex;
  align-items: center;
`;

export const TaskList = styled.div<{ action?: ThreadAction | undefined }>`
  position: absolute;
  ${({ action }) => {
    if (action === ThreadAction.EDIT) {
      return css`
        top: 10px;
        right: 30px;
        /* height: 50px; */
        z-index: 1;
      `;
    }
    return css`
      top: 0;
      right: 0;
      height: 100%;
    `;
  }}
`;

export const Title = styled.span`
  margin-top: 40px;
  display: block;

  ${font.set(40, 'bold')}
  line-height: 50px;
`;

export const SubTitle = styled.span`
  margin-top: 20px;
  display: block;

  ${font.set(20)}
  color: #888;
  line-height: 25px;
`;

export const MetaList = styled.table`
  margin-top: 40px;
  border-collapse: collapse;
`;

export const Devider = styled.hr`
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid #eee;
`;

export const Contents = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;
