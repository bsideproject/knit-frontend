import { FC, memo, MouseEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCaretPixel } from '~/utils/dom';
import { Container, PanelContainer, PanelContent } from './InlinePanel.styled';
import { Panel, ColorPalette, AlignPanel, HeadingPanel, UrlPanel } from '~/atoms/panel';
import { DesignCommandType } from '~/@types/resources/thread';
import { useRootState } from '~/app/store';
import {
  setIsOpenAlignPanel,
  setIsOpenBackPalette,
  setIsOpenHeadingPanel,
  setIsOpenPalette,
  setIsOpenUrlPanel,
} from '~/molecules/thread/Contents/Contents.slice';
import { CaretPixel, PanelStyles } from './types';
import BackColorPalette from '~/atoms/panel/BackColorPalette';

interface Props {
  baseElement: HTMLDivElement | null;
  onContentWrapped: (type: DesignCommandType) => void;
}

const InlinePannel: FC<Props> = ({ baseElement, onContentWrapped }) => {
  const [currentStyle, setCurrentStyle] = useState<PanelStyles>();
  const [caretPixel, setCaretPixel] = useState<CaretPixel | null>(null);

  const {
    isOpenPalette,
    isOpenAlignPanel,
    isOpenHeadingPanel,
    isOpenBackPalette,
    isOpenUrlPanel,
  } = useRootState(({ contents }) => contents);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleSelectionChange = () => {
      try {
        const pixel = getCaretPixel();
        const container = baseElement?.getBoundingClientRect();
        if (pixel) {
          handleCurrentStyle();
        }
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

  const handleCurrentStyle = () => {
    const selectionNode = document.getSelection()?.getRangeAt(0).startContainer.parentNode as any;

    if (selectionNode) {
      const newCurrentStyle = {
        ...currentStyle,
        color: selectionNode.color ? selectionNode.color : null,
        size: selectionNode.size ? selectionNode.size : null,
        background: selectionNode.style.backgroundColor
          ? selectionNode.style.backgroundColor
          : null,
      };

      setCurrentStyle(newCurrentStyle);
    }
  };

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
    dispatch(setIsOpenHeadingPanel(false));
    dispatch(setIsOpenBackPalette(false));
    dispatch(setIsOpenUrlPanel(false));
  };

  if (!caretPixel) return null;

  return (
    <Container top={caretPixel.top} left={caretPixel.left} onMouseDown={handleMouseDown}>
      {isOpenAlignPanel && <AlignPanel />}
      {isOpenHeadingPanel && <HeadingPanel />}
      {isOpenPalette && <ColorPalette />}
      {isOpenBackPalette && <BackColorPalette />}
      {isOpenUrlPanel && <UrlPanel />}
      <PanelContainer>
        {Panel.map(({ type, Component }) => (
          <PanelContent onClick={() => handleClickPanel(type)} key={type}>
            <Component currentStyle={currentStyle} />
          </PanelContent>
        ))}
      </PanelContainer>
    </Container>
  );
};

export default memo(InlinePannel);
