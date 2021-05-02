import { VFC } from 'react';
import { useDispatch } from 'react-redux';

import { setIsOpenBackPalette } from '~/molecules/thread/Contents/Contents.slice';
import { OverlayContainer, Container, BackColor } from './BackColorPalette.styled';

const backColors = [
  '#2F2F2F',
  '#FFFFFF',
  '#FF4E4E',
  '#FFD646',
  '#FFC7DB',
  '#FFF966',
  '#DFCBFF',
  '#87FFE9',
  '#9ACFFF',
  '#B3FFB1',
];

const BackColorPalette: VFC = () => {
  const dispatch = useDispatch();

  const handleSelectionBackground = (colorCode: string) => {
    document.execCommand('backColor', false, colorCode);
    dispatch(setIsOpenBackPalette(false));
  };

  const handleOverlayClicked = () => {
    dispatch(setIsOpenBackPalette(false));
  };

  return (
    <>
      <Container>
        {backColors.map((colorCode) => (
          <BackColor
            key={colorCode}
            colorCode={colorCode}
            onClick={() => {
              handleSelectionBackground(colorCode);
            }}
          />
        ))}
      </Container>
      <OverlayContainer onClick={handleOverlayClicked} />
    </>
  );
};

export default BackColorPalette;
