import _ from 'lodash';
import styled from '@emotion/styled';
import { Tag } from '~/atoms/tag';
import { Thread } from '~/@types/resources/thread';

export const Container = styled.div<{ tags: Thread['tags']; editting: boolean }>`
  position: relative;
  display: ${({ tags, editting }) => {
    return _.size(tags) || editting ? 'none' : 'inline-block';
  }};

  & > ${Tag} {
    position: relative;
    margin: 0 10px 10px 0;
    height: 30px;
    width: 100%;
    background: transparent;
    opacity: 0.2;
  }
`;
