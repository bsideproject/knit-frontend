import { FC } from 'react';
import Section from '../Section';
import {
  Container,
  Contents,
  Thumbnail,
  Title,
  HashTags,
  Count,
  CountGroup,
  BottomGroup,
  Date,
  JobTag,
} from './JobSection.styled';

// mocking
import data from '../_data';

const { searchedData } = data;

interface Props {
  menuCategory: string;
}

const JobSection: FC<Props> = ({ menuCategory }) => {
  return (
    <Section>
      {menuCategory !== '모아보기' &&
        searchedData.map(
          ({ id, title, category, hashTags, view, like, thumbnailUrl, createdDate }) => {
            if (menuCategory === category) {
              return (
                <Container key={id}>
                  <Contents>
                    {thumbnailUrl && <Thumbnail thumbnailUrl={thumbnailUrl} />}
                    <JobTag categorized={category}>{category}</JobTag>
                    <Title>{title}</Title>
                    <HashTags>{hashTags}</HashTags>
                  </Contents>
                  <BottomGroup>
                    <CountGroup>
                      <Count type="view">{view}</Count>
                      <Count type="like">{like}</Count>
                    </CountGroup>
                    <Date>{createdDate}</Date>
                  </BottomGroup>
                </Container>
              );
            }
            return <></>;
          }
        )}
      {menuCategory === '모아보기' &&
        searchedData.map(
          ({ id, title, category, hashTags, view, like, thumbnailUrl, createdDate }) => {
            return (
              <Container key={id}>
                <Contents>
                  {thumbnailUrl && <Thumbnail thumbnailUrl={thumbnailUrl} />}
                  {category && <JobTag categorized={category}>{category}</JobTag>}
                  <Title>{title}</Title>
                  <HashTags>{hashTags}</HashTags>
                </Contents>
                <BottomGroup>
                  <CountGroup>
                    <Count type="view">{view}</Count>
                    <Count type="like">{like}</Count>
                  </CountGroup>
                  <Date>{createdDate}</Date>
                </BottomGroup>
              </Container>
            );
          }
        )}
    </Section>
  );
};

export default JobSection;
