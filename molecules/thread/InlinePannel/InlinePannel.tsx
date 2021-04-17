import { FC, memo, MouseEventHandler, useEffect, useState } from 'react';
import { getCaretPixel } from '~/utils/dom';
import { Container } from './InlinePannel.styled';

type CaretPixel = {
  top: number;
  left: number;
};

interface Props {
  baseElement: HTMLDivElement | null;
}

const InlinePannel: FC<Props> = ({ baseElement }) => {
  const [caretPixel, setCaretPixel] = useState<CaretPixel | null>(null);

  useEffect(() => {
    const handleSelectionChange = () => {
      const pixel = getCaretPixel();
      const container = baseElement?.getBoundingClientRect();
      if (!pixel || !container) {
        setCaretPixel(null);
        return;
      }
      setCaretPixel({
        top: pixel.top - container.top,
        left: pixel.left - container.left,
      });
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  const handleMouseDown: MouseEventHandler = (event) => {
    event.preventDefault();
  };

  if (!caretPixel) return null;
  return <Container top={caretPixel.top} left={caretPixel.left} onMouseDown={handleMouseDown} />;
};

export default memo(InlinePannel);
