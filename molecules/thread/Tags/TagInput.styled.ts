import styled from '@emotion/styled';
import ContentEditable from 'react-contenteditable';
import * as font from '~/styles/font';
import * as animation from '~/styles/animation';

export const Input = styled(ContentEditable as any)`
  margin: 0 10px 10px 0;
  padding: 4px 10px;
  min-width: 60px;

  display: inline-block;

  background: #f7b8ce;
  border-radius: 4px;

  ${font.set(14)}
  ${animation.toastUp(8)}

  outline: none;

  &:hover {
    background: #f7b8ce;
  }
`;
