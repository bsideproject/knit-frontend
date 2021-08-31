import { VFC } from 'react';
import { useRouter } from 'next/router';
import { Color, Size } from '~/@types';

import { Container, Title, Content, Description, Button, Strong } from './NoSearchData.styled';

interface Props {
  searchValue: string;
}

const NoSearchData: VFC<Props> = ({ searchValue }) => {
  const router = useRouter();

  const handleButtonClicked = () => {
    router.push('/thread');
  };

  return (
    <Container>
      <Title>
        <Strong>{`"${searchValue}"` || `""`}</Strong> 대한 검색 결과를 찾지 못했어요.
      </Title>
      <Content>
        <Strong>{searchValue}</Strong> 문서의 첫번째 주인이 되어주세요.
        <Description>
          Tip) 등록된 문서가 없을 땐, 새 주제를 제안해보세요. 알맞은 내용인지 검수 후 문서가
          등록됩니다.
        </Description>
        <Button color={Color.PRIMARY} size={Size.SMALL} onClick={handleButtonClicked}>
          새 주제 제안하기
        </Button>
      </Content>
    </Container>
  );
};

export default NoSearchData;
