import styled from '@emotion/styled';
import {
  FC,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { Container, Input, SearchButton } from './SearchInput.styled';

export interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onSubmit'
  > {
  className?: string;
  onSubmit: (value: string) => void;
}

const SearchInput: FC<Props> = ({ className, onSubmit, ...restProps }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === 'Enter') {
      setSearchValue('');
      onSubmit(searchValue);
    }
  };

  return (
    <Container className={className}>
      <Input {...restProps} onChange={onChange} onKeyPress={handleKeyPress} value={searchValue} />
      <SearchButton
        onClick={() => {
          onSubmit(searchValue);
        }}
      />
    </Container>
  );
};

export default styled(SearchInput)``;
