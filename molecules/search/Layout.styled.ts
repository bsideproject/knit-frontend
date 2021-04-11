import styled from '@emotion/styled';
import { fitInResolutionOnPage } from '~/styles/layout';
import { TextInput as AtomTextInput } from '~/atoms/field';
import * as font from '~/styles/font';

export const Container = styled.div`
  ${fitInResolutionOnPage};
  position: relative;
  padding-top: 30px;
  margin-top: 10px;
`;

export const ThreadsContainer = styled.div`
  background: rgb(245, 245, 248);
  padding-bottom: 15px;
  min-height: 100vh; // temp 조정필요
`;

export const TotalCount = styled.div`
  padding: 15px 0px;
`;

export const TextInput = styled(AtomTextInput)`
  ${font.set(32)}
`;

export const CategoryContanier = styled.div`
  display: flex;
  padding-top: 30px;
  width: 130px;
  justify-content: space-around;
  padding-bottom: 10px;
  color: #b2b2b9;
`;
interface CatergoryProps {
  highlight: boolean;
}
export const Category = styled.span<CatergoryProps>`
  cursor: pointer;
  color: ${({ highlight, theme }) => (highlight ? theme.palette.primary : '#b2b2b9')};
`;
