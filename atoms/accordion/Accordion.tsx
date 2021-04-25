import { FC, useState, useRef } from 'react';
import { Container, ArrowBottom, Content, ChildrenContent, Header } from './Accordion.styled';

interface Props {
  title?: string;
  collapse?: boolean;
}
const Accordion: FC<Props> = ({ children, title, collapse = false }) => {
  const [isCollapse, setIsCollapse] = useState(collapse);
  const contentRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const handleButtonClick = () => {
    if (!contentRef.current || !childrenRef.current) {
      return;
    }

    if (isCollapse) {
      contentRef.current.style.height = '0px';
    } else {
      contentRef.current.style.height = `${childrenRef.current?.clientHeight}px`;
    }
    setIsCollapse((prev) => !prev);
  };
  return (
    <Container>
      <Header>
        {title}
        <ArrowBottom onClick={handleButtonClick} isCollapse={isCollapse} />
      </Header>
      <Content ref={contentRef} collapse={collapse}>
        <ChildrenContent ref={childrenRef}>{children}</ChildrenContent>
      </Content>
    </Container>
  );
};
export default Accordion;
