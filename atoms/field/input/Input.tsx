export interface Props {
  placeHolder?: string;
}
export default function Input({ placeHolder = '' }: Props) {
  return <input placeholder={placeHolder} />;
}
