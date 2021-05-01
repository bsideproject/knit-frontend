import { VFC } from 'react';
import { Container, Color } from './ColorPalette.styled';

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
  const handleSelectionBackground = (colorCode: string) => {
    document.execCommand('foreColor', false, colorCode);
  };

  return (
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
  );
};

export default ColorPalette;
