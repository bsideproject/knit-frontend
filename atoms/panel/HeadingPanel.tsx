import { VFC } from 'react';
import { Container, Content, H1, H2, H3, MainText, Description } from './HeadingPanel.styled';

const HeadingPanel: VFC = () => {
  const handleSelectionBackground = () => {
    document.execCommand('formatBlock', true, '<H1>');
  };

  return (
    <Container>
      <Content
        onClick={() => {
          handleSelectionBackground();
        }}
      >
        <H1>제목1</H1>
      </Content>
      <Content>
        <H2>제목2</H2>
      </Content>
      <Content>
        <H3>제목3</H3>
      </Content>
      <Content>
        <MainText>제목</MainText>
      </Content>
      <Content>
        <Description>설명글</Description>
      </Content>
    </Container>
  );
};

export default HeadingPanel;
