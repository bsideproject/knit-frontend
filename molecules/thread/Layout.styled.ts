import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { memo } from 'react';
import { fitInResolutionOnPage } from '~/styles/layout';
import * as font from '~/styles/font';
import { ThreadAction } from '~/@types/resources/thread';
import { resolveProp } from '~/utils/styles';
import { TextBlock, TextBlockProps } from './Block';
import { CSSzIndex } from '~/@types/style';

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

export const Tasks = styled.div<{ action?: ThreadAction | undefined }>`
  position: absolute;

  ${resolveProp('action', {
    [ThreadAction.EDIT]: css`
      top: 12px;
      right: 32px;
      z-index: ${CSSzIndex.THREAD_PAGE_TASKS};
    `,
    default: css`
      top: 0;
      right: 0;
      height: 100%;
    `,
  })}
`;

export const TitleBlock = styled(memo(TextBlock))<TextBlockProps>`
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

export const SubTitleBlock = styled(memo(TextBlock))<TextBlockProps>`
  margin-top: 10px;
  display: block;

  ${font.set(20, 'bold')}
  color: #818189;
  line-height: 25px;
`;

export const Metas = styled.table`
  margin-top: 40px;
  width: 100%;
  border-collapse: collapse;
`;

export const Divider = styled.hr`
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid #eee;
`;
