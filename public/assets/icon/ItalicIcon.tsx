import { VFC } from 'react';

export interface ItalicProps {
  className?: string;
}

const Italic: VFC<ItalicProps> = () => {
  return (
    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.25 0.649902H7.61M0 13.48H4.35M5.64006 0.649902L2.06006 13.4799"
        stroke="#2F2F2F"
        strokeWidth="1.3"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Italic;
