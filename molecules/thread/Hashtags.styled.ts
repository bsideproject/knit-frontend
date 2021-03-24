import styled from '@emotion/styled';
import { Hashtag } from '~/atoms/hashtag';
import { fitInResolution } from '~/styles/layout';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Aligner = styled.div`
  ${fitInResolution}
  padding-top: 24px;
  padding-bottom: 30px;

  & > ${Hashtag} {
    margin-right: 8px;
  }
`;

export const BoundaryLine = styled.hr`
  margin: 24px 0 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey};
`;
