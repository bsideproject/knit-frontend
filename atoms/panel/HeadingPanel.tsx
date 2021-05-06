import { VFC } from 'react';
import { Container, Content, H1, H2, H3, MainText, Description } from './HeadingPanel.styled';

const HeadingPanel: VFC = () => {
  const handleSelectionBackground = (type: string) => {
    if (type === 'h1') {
      document.execCommand('fontSize', true, '6');
    }

    if (type === 'h2') {
      document.execCommand('fontSize', true, '5');
    }
    if (type === 'h3') {
      document.execCommand('fontSize', true, '4');
    }
    if (type === 'mainText') {
      document.execCommand('fontSize', true, '3');
    }

    if (type === 'description') {
      document.execCommand('fontSize', true, '2');
      document.execCommand('foreColor', true, '#818189');
    }
  };

  return (
    <Container>
      <Content
        onClick={() => {
          handleSelectionBackground('h1');
        }}
      >
        <H1>제목1</H1>
      </Content>
      <Content
        onClick={() => {
          handleSelectionBackground('h2');
        }}
      >
        <H2>제목2</H2>
      </Content>
      <Content
        onClick={() => {
          handleSelectionBackground('h3');
        }}
      >
        <H3>제목3</H3>
      </Content>
      <Content
        onClick={() => {
          handleSelectionBackground('mainText');
        }}
      >
        <MainText>본문</MainText>
      </Content>
      <Content
        onClick={() => {
          handleSelectionBackground('description');
        }}
      >
        <Description>설명글</Description>
      </Content>
    </Container>
  );
};

export default HeadingPanel;
