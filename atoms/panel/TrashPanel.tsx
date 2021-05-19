import { useEffect, useState, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { Container, OverlayContainer, TrashIcon } from './TrashPanel.styled';
import { setPosTrashPanel } from '~/molecules/thread/Contents/Contents.slice';
import { useRootState } from '~/app/store';

interface TrashPanelProps {}

const TrashPanel: VFC<TrashPanelProps> = () => {
  const dispatch = useDispatch();
  const [memoSelection, setMemoSelection] = useState<Range>();

  useEffect(() => {
    const range = document.getSelection()?.getRangeAt(0);

    setMemoSelection(range);
  }, []);

  const { posTrashPanel } = useRootState(({ contents }) => contents);

  const handleOverlayClicked = () => {
    dispatch(setPosTrashPanel(null));
  };

  const removeHref = () => {
    const selection = document.getSelection();

    if (selection && memoSelection) {
      try {
        const { startContainer } = memoSelection;
        const range = document.createRange();

        const selectionText = memoSelection.startContainer.textContent;

        range.setStart(startContainer, 0);
        range.setEnd(startContainer, selectionText?.length ?? 0);

        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('insertHTML', false, `<div >${selectionText}</div>`);
      } catch (error) {
        throw Error(error);
      } finally {
        dispatch(setPosTrashPanel(null));
      }
    }
  };

  if (!posTrashPanel) {
    return null;
  }

  return (
    <>
      <Container left={posTrashPanel.x} top={posTrashPanel.y} onClick={removeHref}>
        <TrashIcon />
      </Container>
      <OverlayContainer onClick={handleOverlayClicked} />
    </>
  );
};

export default TrashPanel;
