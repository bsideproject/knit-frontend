import { VFC } from 'react';

export interface LineThroughProps {
  className?: string;
}

const LineThrough: VFC<LineThroughProps> = () => {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.554 14H6.228V2.21H10.224V0.788H0.558V2.21H4.554V14Z" fill="#505055" />
      <path d="M0 8.15H10.782V9.05H0V8.15Z" fill="#505055" />
    </svg>
  );
};

export default LineThrough;
