import { useEffect, useRef, useState, VFC, ChangeEvent, KeyboardEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { Container, OverlayContainer, InputStyled } from './UrlPanel.styled';
import { setIsOpenUrlPanel, setPosTrashPanel } from '~/molecules/thread/Contents/Contents.slice';

interface UrlPanelProps {
  top: number;
  left: number;
}

const UrlPanel: VFC<UrlPanelProps> = ({ top, left }) => {
  const dispatch = useDispatch();
  const [memoSelection, setMemoSelection] = useState<Range | null | undefined>(null);
  const inputRef = useRef<any>(null);
  const [value, setValue] = useState('');

  const handleOverlayClicked = () => {
    dispatch(setIsOpenUrlPanel(false));
  };

  useEffect(() => {
    if (memoSelection === null) {
      const selectionNode = document.getSelection()?.getRangeAt(0);
      setMemoSelection(selectionNode);
    }
    // createLink
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [inputRef, memoSelection]);

  // Todo specific type
  const handleCustomAClick = (e: any) => {
    const { layerX, layerY } = e;
    //  The alternative option is offsetX and offsetY.

    dispatch(setPosTrashPanel({ x: layerX, y: layerY }));
  };
  const handleKeyDown: KeyboardEventHandler = (e) => {
    const selection = document.getSelection();
    if (e.key === 'Enter') {
      e.preventDefault();
      if (selection && memoSelection) {
        try {
          const { startOffset, endOffset, startContainer } = memoSelection;
          const range = document.createRange();
          range.setStart(startContainer, startOffset);
          range.setEnd(startContainer, endOffset);

          selection.removeAllRanges();
          selection.addRange(range);

          document.execCommand(
            'insertHTML',
            false,
            `<a class="custom_a" href="${`http://${value}`}" target="_blank">${memoSelection.toString()}</a>`
          );

          const classList = document.getElementsByClassName('custom_a');

          const executeNode = classList[classList.length - 1];

          executeNode.addEventListener('click', (e) => {
            // bug addEventLister is removed
            handleCustomAClick(e);
          });
        } catch (error) {
          console.error(error);
        } finally {
          dispatch(setIsOpenUrlPanel(false));
        }
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Container top={top} left={left}>
        <InputStyled ref={inputRef} onKeyDown={handleKeyDown} onChange={handleChange} />
      </Container>
      <OverlayContainer onClick={handleOverlayClicked} />
    </>
  );
};

export default UrlPanel;
