import { VFC } from 'react';

export interface UnderLineProps {
  className?: string;
}

const UnderLine: VFC<UnderLineProps> = () => {
  return (
    <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.4 12.195C7.65 12.195 9.36 10.995 9.36 7.45499V0.98999H8.025V7.49999C8.025 10.155 6.87 10.98 5.4 10.98C3.975 10.98 2.85 10.155 2.85 7.49999V0.98999H1.455V7.45499C1.455 10.995 3.165 12.195 5.4 12.195Z"
        fill="#505055"
      />
      <path d="M0 14.25H10.815V15H0V14.25Z" fill="#505055" />
    </svg>
  );
};

export default UnderLine;
