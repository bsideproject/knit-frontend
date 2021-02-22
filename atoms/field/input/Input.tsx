import { VFC } from 'react';

export interface Props {
  placeHolder?: string;
}
const Input: VFC<Props> = ({ placeHolder = '' }) => {
  return <input placeholder={placeHolder} />;
};
export default Input;
