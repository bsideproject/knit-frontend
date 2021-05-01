import { VFC } from 'react';
import {
  Container,
  Content,
  AlignLeftStyled,
  AlignCenterStyled,
  AlignRightStyled,
} from './AlignPanel.styled';
import { AlignTypes } from './types';

const alignTypes = ['left', 'center', 'right'] as ReadonlyArray<AlignTypes>;

const AlignPanel: VFC = () => {
  const handleSelectionAlign = (type: AlignTypes) => {
    if (type === AlignTypes.LEFT) {
      document.execCommand('justifyLeft');
    }
    if (type === AlignTypes.CENTER) {
      document.execCommand('justifyCenter');
    }
    if (type === AlignTypes.RIGHT) {
      document.execCommand('justifyRight');
    }
  };

  return (
    <Container>
      {alignTypes.map((type) => (
        <Content
          key={type}
          onClick={() => {
            handleSelectionAlign(type);
          }}
        >
          {type === 'left' && <AlignLeftStyled />}
          {type === 'center' && <AlignCenterStyled />}
          {type === 'right' && <AlignRightStyled />}
        </Content>
      ))}
    </Container>
  );
};

export default AlignPanel;
