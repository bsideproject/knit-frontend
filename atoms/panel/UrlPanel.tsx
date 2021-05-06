import { useEffect, useRef, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { Container, OverlayContainer } from './UrlPanel.styled';
import { setIsOpenUrlPanel } from '~/molecules/thread/Contents/Contents.slice';

// import { Input } from '../field';

const UrlPanel: VFC = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleOverlayClicked = () => {
    dispatch(setIsOpenUrlPanel(false));
  };

  useEffect(() => {
    if (inputRef) {
      //   inputRef.current?.focus();
    }
  }, [inputRef]);
  return (
    <>
      <Container>
        {/* <Content
          onClick={() => {
            // handleSelectionAlign(type);
          }}
        /> */}
        <input />
      </Container>
      <OverlayContainer onClick={handleOverlayClicked} />
    </>
  );
};

export default UrlPanel;
