import styled from '@emotion/styled';
import { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Container, Input, SearchButton } from './SearchInput.styled';

export interface Props
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  onSubmit: () => void;
}

const SearchInput: FC<Props> = ({ className, onSubmit, ...restProps }) => {
  return (
    <Container className={className}>
      <Input {...restProps} />
      <SearchButton onClick={onSubmit} />
    </Container>
  );
};

export default styled(SearchInput)``;
