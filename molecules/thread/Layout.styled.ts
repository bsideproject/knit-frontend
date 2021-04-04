import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { fitInResolutionOnPage } from '~/styles/layout';
import * as font from '~/styles/font';
import { ThreadAction } from '~/@types/resources/thread';
import { resolveProp } from '~/utils/styles';
import { Block, BlockProps } from './Block';

export const Container = styled.div`
  ${fitInResolutionOnPage};
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

  ${resolveProp('action', {
    [ThreadAction.EDIT]: css`
      top: 12px;
      right: 32px;
      z-index: 1;
    `,
    default: css`
      top: 0;
      right: 0;
      height: 100%;
    `,
  })}
`;

export const TitleBlock = styled(Block)<BlockProps>`
  ${font.set(40, 'bold')};
  line-height: 50px;

  ${resolveProp('editable', {
    false: css`
      margin-top: 41px;
    `,
    true: css`
      margin-top: 20px;
    `,
  })}
`;

export const SubTitleBlock = styled(Block)<BlockProps>`
  margin-top: 20px;
  display: block;

  ${font.set(20, 'bold')}
  color: #818189;
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
