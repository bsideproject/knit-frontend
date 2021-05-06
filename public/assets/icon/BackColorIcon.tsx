import { VFC } from 'react';

export interface BackColorProps {
  className?: string;
}

const BackColor: VFC<BackColorProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="19"
      height="19"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 1H1V20H20V1ZM0 0V21H21V0H0Z"
        fill="#505055"
      />
      <path d="M10.048 17H11.536V6.52H15.088V5.256H6.496V6.52H10.048V17Z" fill="#505055" />
    </svg>
  );
};

export default BackColor;
