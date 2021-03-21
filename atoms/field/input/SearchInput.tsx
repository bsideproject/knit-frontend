import { Wrapper } from './SearchInput.styled';
import Input, { Props as InputProps } from './Input';

interface Props extends InputProps {
  className?: string;
}
const SearchInput = ({ placeHolder, className }: Props) => {
  return (
    <Wrapper className={className}>
      <Input placeHolder={placeHolder} />
    </Wrapper>
  );
};
export default SearchInput;
