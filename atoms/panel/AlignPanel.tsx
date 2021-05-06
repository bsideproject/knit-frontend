import { VFC } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Content,
  AlignLeftStyled,
  AlignCenterStyled,
  AlignRightStyled,
  OverlayContainer,
} from './AlignPanel.styled';
import { setIsOpenAlignPanel } from '~/molecules/thread/Contents/Contents.slice';

import { AlignTypes } from './types';

const alignTypes = ['left', 'center', 'right'] as ReadonlyArray<AlignTypes>;

const AlignPanel: VFC = () => {
  const dispatch = useDispatch();

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
    dispatch(setIsOpenAlignPanel(false));
  };

  const handleOverlayClicked = () => {
    dispatch(setIsOpenAlignPanel(false));
  };
  return (
    <>
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
      <OverlayContainer onClick={handleOverlayClicked} />
    </>
  );
};

export default AlignPanel;
