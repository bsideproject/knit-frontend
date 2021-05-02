import { VFC } from 'react';
import { useDispatch } from 'react-redux';
import { OverlayContainer, Container, Color } from './ColorPalette.styled';
import { setIsOpenPalette } from '~/molecules/thread/Contents/Contents.slice';

const colors = [
  '#2F2F2F',
  '#FFFFFF',
  '#F22A2A',
  '#FFB800',
  '#E600EB',
  '#FFF733',
  '#771CEC',
  '#02C6A2',
  '#4461FA',
  '#41BA3F',
];

const ColorPalette: VFC = () => {
  const dispatch = useDispatch();

  const handleSelectionBackground = (colorCode: string) => {
    document.execCommand('foreColor', false, colorCode);
    dispatch(setIsOpenPalette(false));
  };

  const handleOverlayClicked = () => {
    dispatch(setIsOpenPalette(false));
  };

  return (
    <>
      <Container>
        {colors.map((colorCode) => (
          <Color
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

export default ColorPalette;
