import { FC, memo, MouseEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCaretPixel } from '~/utils/dom';
import { Container, PanelContainer, PanelContent } from './InlinePanel.styled';
import { Panel, ColorPalette, AlignPanel, HeadingPanel } from '~/atoms/panel';
import { DesignCommandType } from '~/@types/resources/thread';
import { useRootState } from '~/app/store';
import { setIsOpenAlignPanel, setIsOpenPalette } from '~/molecules/thread/Contents/Contents.slice';

type CaretPixel = {
  top: number;
  left: number;
};

interface Props {
  baseElement: HTMLDivElement | null;
  onContentWrapped: (type: DesignCommandType) => void;
}

const InlinePannel: FC<Props> = ({ baseElement, onContentWrapped }) => {
  const [caretPixel, setCaretPixel] = useState<CaretPixel | null>(null);
  const isOpenPalette = useRootState(({ contents }) => contents.isOpenPalette);
  const isOpenAlignPanel = useRootState(({ contents }) => contents.isOpenAlignPanel);
  const isOpenHeadingPanel = useRootState(({ contents }) => contents.isOpenHeadingPanel);

  const dispatch = useDispatch();
  useEffect(() => {
    const handleSelectionChange = () => {
      try {
        const pixel = getCaretPixel();
        const container = baseElement?.getBoundingClientRect();
        if (!pixel || !container) {
          resetPanel();
          return;
        }
        setCaretPixel({
          top: pixel.top - container.top,
          left: pixel.left - container.left,
        });
      } catch {
        resetPanel();
      }
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  const handleMouseDown: MouseEventHandler = (event) => {
    event.preventDefault();
  };
  const handleClickPanel = (type: DesignCommandType) => {
    onContentWrapped(type);
  };

  const resetPanel = () => {
    setCaretPixel(null);
    dispatch(setIsOpenPalette(false));
    dispatch(setIsOpenAlignPanel(false));
  };

  if (!caretPixel) return null;
  return (
    <Container top={caretPixel.top} left={caretPixel.left} onMouseDown={handleMouseDown}>
      {isOpenPalette && <ColorPalette />}
      {isOpenAlignPanel && <AlignPanel />}
      {isOpenHeadingPanel && <HeadingPanel />}
      <PanelContainer>
        {Panel.map(({ type, component }) => (
          <PanelContent onClick={() => handleClickPanel(type)} key={type}>
            {component}
          </PanelContent>
        ))}
      </PanelContainer>
    </Container>
  );
};

export default memo(InlinePannel);
