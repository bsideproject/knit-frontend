export interface Props {
  placeHolder?: string;
}
const Input = ({ placeHolder = '' }: Props) => {
  return <input placeholder={placeHolder} />;
};
export default Input;
